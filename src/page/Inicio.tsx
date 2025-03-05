import React from "react";
import { Link } from "react-router-dom";

const Inicio: React.FC = () => {
  const borrarDatos = () => {
    if (window.confirm("¿Seguro que quieres borrar el progreso?")) {
      localStorage.clear();
      window.location.reload();
    }
  };
  return (
    <div>
      <h1>Bienvenido al Clicker</h1>
      <Link to="/juego">
        <button>Jugar</button>
      </Link>
      <button onClick={borrarDatos}>Borrar Datos</button>
    </div>
  );
};

export default Inicio;