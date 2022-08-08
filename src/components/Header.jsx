export const Header = () => {
  return (
    <div className="flex justify-between bg-gray-100 py-1 border-b border-gray-400 shadow-lg">
      <img
        className="h-16 mx-4"
        src="https://desarrollo.consigueventas.com/Frontend/Recursos/Logo.svg"
      />
      <button
        type="submit"
        onClick={() => {
          window.location.replace(
            "https://erp.consigueventas.com/sistema/asistencia/#/login"
          );
        }}
        className="cursor-pointer py-2 px-6 block duration-75 text-gray-900  text-md md:text-xl font-bold w-52 text-center rounded"
      >
        Inicio de sesión
      </button>
    </div>
  );
}
