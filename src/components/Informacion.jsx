export const Informacion = () => {
  return (
    <div className="flex col-span-6 p-4 text-white justify-center">
      <div className="p-4 text-justify font-medium">
        <h1 className="text-center pb-2 text-2xl md:text-4xl ">Reglas</h1>
        <h3 className="text-lg md:pl-7 md:text-3xl">Tolerancia 10 min</h3>
        <h3 className="text-lg md:pl-7 md:text-3xl">
          3 Tardanzas = 1 día de inasistencia
        </h3>
        <h3 className="text-lg md:pl-7 md:text-3xl">
          1 día de inasistencia = Un día más a la fecha final del periodo de
          práctica
        </h3>
      </div>
    </div>
  );
}
