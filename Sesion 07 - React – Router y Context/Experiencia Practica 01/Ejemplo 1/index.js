import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

export default function App() {
  const titulo = useState("Cineplanet");
  const [name, setName] = useState("Name and last name");
  const [entradas, setEntradas] = useState(0);
  
  function changeName(e) {
    setName(e.target.value);
  }
  
  return (
    <div>
      <h1>Bienvenido a {titulo} </h1>
      <h1>Desarrollo de Aplicaciones</h1>
      <h2>Nombre :<input value={name} onChange={changeName} ></input></h2>
      <h2>{name}, elige la cantidad de entradas</h2>
      <h3> Comprar {entradas} entradas</h3>
      <button onClick={() => setEntradas(entradas+1)}>+1 Entrada</button>
    </div>
  )
}
