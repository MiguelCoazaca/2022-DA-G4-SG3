import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"


export default function App() {
  const [contar, setContar] = useState(0);
  const disminuye = () => {setContar(contar - 1);};
  const reiniciar = () => {setContar(0);};
  const incrementa = () => {setContar(contar + 1);};
  return (
    <section>
        <h1>CARRITO DE COMPRAS</h1>
        <h2>{contar}</h2>
        <h3><button className="btn" onClick={disminuye}>-</button>
        <button className="btn" onClick={reiniciar}>Borrar</button>
        <button className="btn" onClick={incrementa}>+</button></h3>
      </section>
  );
}
