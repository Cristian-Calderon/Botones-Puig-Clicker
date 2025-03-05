// importar librerias
import React from 'react';
import Moneda from '../component/Moneda';
import { useNavigate } from 'react-router-dom';


// Pagina Juego
function Juego() {
    // Navegador
    const navigate = useNavigate();
    const irAInicio = () => {
        navigate('/');
    }
    const [contador, setContador] = React.useState(0);



    return (
        <div>
            <h1>Pagina Juego</h1>
            <Moneda nombre="Bitcoin" valor={contador}  />
            <button onClick={irAInicio} > Ir a Inicio</button>
        </div>
    );
};

export default Juego;