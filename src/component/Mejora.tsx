import React from "react";

interface MejoraProps {
  nombre: string;
  costo: number;
  cantidad: number;
  onClick: () => void;
}

const Mejora: React.FC<MejoraProps> = ({ nombre, costo, cantidad, onClick }) => {
  return (
    <button onClick={onClick}>
      {nombre} (Nivel {cantidad}) - Costo: {costo}
    </button>
  );
};

export default Mejora;
