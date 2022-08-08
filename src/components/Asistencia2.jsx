import { Formulario } from "./Formulario";
import { Header } from "./Header";
import { Informacion } from "./Informacion";

const Asistencia2 = () => {
  return (
    <> 
      <div className="h-screen bg-gradient-to-r from-yellow-700 to-yellow-300"> 
        <Header />
        <div className="mx-auto grid grid-cols-1 xl:grid-cols-12 justify-center content-center h-5/6">
          <Informacion />
          <Formulario />
        </div>
      </div>
    </>
  );
};


export default Asistencia2;
