import { useEffect, useRef, useState } from "react";
import { registrarMarcacion } from "../services/marcacion";
import { Loader } from "./Loader";
import { useLocalStorage } from '../hooks'
import { Message } from "./Message";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { dateCheck } from "../util/dateCheck";
import ReCAPTCHA from "react-google-recaptcha";

export const Formulario = () => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ isValid, setValid ] = useState(false);
  const [ isRegistered, setIsRegistered] = useLocalStorage("isRegistered",false);
  const [ lastRegister, setLastRegister] = useLocalStorage("lastRegister",null);
  const campo = useRef();
  const captcha = useRef(null);

  const onInputDni = () => {
    const { value } = campo.current
    campo.current.value = value.slice(0, 8)
    campo.current.value.length === 8 ? setValid(true) : setValid(false)
  };

  const MySwal = withReactContent(Swal)

  const alertIsRegisted = () => {
    if(dateCheck(lastRegister)) { 
      MySwal.fire({
        title: <strong>Ya marcaste asistencia!</strong>,
        icon: 'info'
      })
      return true
    }
  }
  const alertIsInvalid = () => {
    if(!isValid) { 
      MySwal.fire({
        title: <strong>Coloca tu DNI correctamente</strong>,
        icon: 'info'
      })
      return true
    }
  }

  const alertRecaptcha = () => {
    if(!captcha.current.getValue()){
      MySwal.fire({
      title: <strong>Completa primero el reCaptcha</strong>,
      icon: 'info'
    })
    return true;
    }
  }

  const enviarDatos = () => {
    if(alertRecaptcha())return
    if(alertIsRegisted()) return
    if(alertIsInvalid()) return

    const userTime = new Date();

    const dataPost = { 
      dni: campo.current.value, 
      userTime, 
      userAgent: navigator.userAgent, 
      plataform: navigator.platform, 
    }

    setIsLoading(true)
    registrarMarcacion( dataPost )
      .then( response => {
        MySwal.fire({
          title: <strong>{ response?.data?.mensaje}</strong>,
          icon: 'success'
        })
        if (response?.data?.mensaje !== "No puedes volver a marcar asistencia") {
          setIsRegistered(true)
          setLastRegister(userTime)
        }
      })
      .catch( error => {
        MySwal.fire({
          title: <strong>Ups! ocurrió algun error</strong>,
          html: <p>{JSON.stringify(error)}</p>,
          icon: 'error',
        })
      })
      .finally(() => {
        campo.current.value = "" 
        setIsLoading(false)
        setValid(false)
      });

    }

  useEffect(() => {
    setIsRegistered(dateCheck(lastRegister))
  },[])

  return (
    <div className="flex col-span-6 p-4 justify-center ">
      <div className=" p-4 md:p-10 bg-white shadow-2xl rounded-lg">
        <p className="font-medium text-sm sm:text-xl text-gray-900 text-center">
          Bienvenido
        </p>
        <div>
          <input
            ref={campo}
            onInput={onInputDni}
            type="number"
            id="inputPassword2"
            placeholder="Ingrese su DNI para la asistencia"
            className="w-full my-5 py-3 sm:py-2 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-800 bg-gray-50 focus:outline-none text-gray-900"
          />
          <div className="recaptcha my-3">
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LcMwXohAAAAAL2ZVcdrJoisFlEWcUN4ln5Z2E19"
            />
          </div>
          <button
            className="flex-shrink-0 bg-gray-500 text-white text-base font-semibold py-2 sm:px-2 rounded-lg shadow-md hover:bg-gray-700 w-full"
            type="button"
            onClick={enviarDatos}
          >
            Marcar
          </button>
          {isLoading && <Loader />}
          { isRegistered && <Message lastRegister={lastRegister}/> }
        </div>
      </div>
    </div>
  );
}
