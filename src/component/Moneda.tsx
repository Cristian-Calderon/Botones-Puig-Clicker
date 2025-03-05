import React from 'react';
// : ()
function Moneda({ nombre, valor, click }: { nombre: string, valor: number, click: () => void }) {


    
    return (
        <div>
            <p>Nombre: {nombre}</p>
            <p>Valor: {valor}</p>
            <button>Multiplicar</button>

        </div>
    );
}

export default Moneda;