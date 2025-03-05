import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moneda from "../component/Moneda";
import Mejora from "../component/Mejora";

const Juego: React.FC = () => {
  const [monedas, setMonedas] = useState<number>(parseInt(localStorage.getItem("monedas") || "0"));
  const [valoresMoneda, setValoresMoneda] = useState<{ [key: number]: number }>({ 5: 5, 3: 3, 1: 1 });
  const [nivelesMejora, setNivelesMejora] = useState<{ [key: number]: number }>({ 5: 0, 3: 0, 1: 0 });

  useEffect(() => {
    localStorage.setItem("monedas", monedas.toString());
  }, [monedas]);

  const agregarMonedas = (valor: number) => {
    setMonedas(monedas + valor);
  };

  const mejorarMoneda = (baseValor: number, baseCosto: number, factorCosto: number) => {
    const nivelActual = nivelesMejora[baseValor];
    const costoMejora = baseCosto * Math.pow(factorCosto, nivelActual);

    if (monedas >= costoMejora) {
      setMonedas(monedas - costoMejora);
      setValoresMoneda({ ...valoresMoneda, [baseValor]: valoresMoneda[baseValor] * 2 });
      setNivelesMejora({ ...nivelesMejora, [baseValor]: nivelActual + 1 });
    }
  };

  return (
    <div>
      <h1>Juego</h1>
      <p>Monedas: {monedas}</p>
      {Object.entries(valoresMoneda).map(([baseValor, valor]) => (
        <Moneda key={baseValor} nombre={`Moneda ${baseValor}`} valor={valor} onClick={() => agregarMonedas(valor)} />
      ))}
      <h2>Mejoras</h2>
      <Mejora nombre="Mejorar Moneda 5" costo={30 * Math.pow(3, nivelesMejora[5])} cantidad={nivelesMejora[5]} onClick={() => mejorarMoneda(5, 30, 3)} />
      <Mejora nombre="Mejorar Moneda 3" costo={10 * Math.pow(2, nivelesMejora[3])} cantidad={nivelesMejora[3]} onClick={() => mejorarMoneda(3, 10, 2)} />
      <Mejora nombre="Mejorar Moneda 1" costo={15 * Math.pow(2, nivelesMejora[1])} cantidad={nivelesMejora[1]} onClick={() => mejorarMoneda(1, 15, 2)} />
      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default Juego;
