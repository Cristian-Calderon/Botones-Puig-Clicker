// importar librerias
import React from 'react';
import { useNavigate } from 'react-router-dom';



// Pagina inicio
function Inicio() {
// Para navegar

const navigate = useNavigate();
const irAJuego = () => {
    navigate('/juego');

}

    return (
        <div>
            <h1>Pagina Inicio</h1>
            <button onClick={irAJuego}> Ir a Juego</button>
            <button>Borrar los datos</button>
        </div>
    );
};

export default Inicio;