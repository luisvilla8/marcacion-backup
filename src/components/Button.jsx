import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { registrarMarcacion } from "../services/marcacion";

export const Button = ({ 
  setIsLoading, 
  isValid, 
  isRegistered, 
  setIsRegistered,
  setLastRegister, 
  campo,
  setCampo,
  children,
  setValid }) => {

  const enviarDatos = () => {
    const userTime = new Date();

    const dataPost = {
      dni: campo,
      userTime,
      userAgent: navigator.userAgent,
      plataform: navigator.platform,
    };

    const MySwal = withReactContent(Swal)

    setIsLoading(true);
    registrarMarcacion(dataPost)
      .then((response) => {
        MySwal.fire({
          title: <strong>Asistencia registrada!</strong>,
          icon: "success",
        });
        setIsRegistered(true);
        setLastRegister(userTime);
      })
      .catch((error) => {
        MySwal.fire({
          title: <strong>Ups! ocurrió algun error</strong>,
          icon: "error",
        });
      })
      .finally(() => {
        setCampo("");
        setValid(false);
        setIsLoading(false);
      });
  };
  console.log("pudees dar click", isValid && isRegistered)
  return (
    <button
      className="flex-shrink-0 bg-gray-500 text-white text-base font-semibold py-2 sm:px-2 rounded-lg shadow-md hover:bg-gray-700 w-full"
      type="button"
      onClick={enviarDatos}
      disabled={!isValid || isRegistered}
    >
      { children }
    </button>
  );
}
