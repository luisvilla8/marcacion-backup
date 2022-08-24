import { useState } from "react";
import { Asistencia2 } from "./components/";
//---STYLES-MODAL TEMPORAL---
import "./styled-modal.css";


export const App = () => {
  /* --- MODAL TEMPORAL --- */
  const [inputValue, setInputValue] = useState("");

  const password = "admin123";

  const onChange = ({ target }) => setInputValue(target.value);

  if (password !== inputValue) {
    return (
      <div className="container-modal">
        <div className="modal-temp">
          <h1 className="h1-temp">Acceso restringido!</h1>
          <label>Ingrese la clave para continuar:</label>
          <input
            className="input-temp"
            type="password"
            placeholder="Ingresar Clave"
            onChange={(event) => onChange(event)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* <Asistencia /> */}
      <Asistencia2 />
    </div>
  );
};
