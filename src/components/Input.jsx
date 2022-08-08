import React from 'react'

export const Input = ({ campo, setCampo, setValid }) => {

  const onInputDni = ({ target }) => {
    const value = target.value.slice(0,8)
    if(campo.length <= 8) setCampo(value);
    (campo.length === 8) ? setValid(true) : setValid(false);
  };

  return (
    <input
      value={campo}
      onInput={onInputDni}
      type="number"
      placeholder="Ingrese su DNI para la asistencia"
      className="w-full my-5 py-3 sm:py-2 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-800 bg-gray-50 focus:outline-none text-gray-900"
    />
  );
}
