import React from "react";

interface MonedaProps {
  nombre: string;
  valor: number;
  onClick: () => void;
}

const Moneda: React.FC<MonedaProps> = ({ nombre, valor, onClick }) => {
  return (
    <button onClick={onClick}>
      {nombre} (+{valor})
    </button>
  );
};

export default Moneda;
