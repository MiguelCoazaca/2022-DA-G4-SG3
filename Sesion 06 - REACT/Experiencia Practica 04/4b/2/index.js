import React,{ useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Banderar() {
  const [color, setColor] = useState({
    nombre: "Adriana",
    nacionalidad1: "peruana",
    nacionalidad2: "catari",
    color: "rojo"
  });

  const nuevoCOlor = () => {
    setColor(antes => {
      return { ...antes, color: "rojo" }
    });
  }

  return (
    <>
      <h1>Hola mi nombre es {color.nombre}</h1>
      <p>
        Puedo ser  {color.nacionalidad1} o  {color.nacionalidad2}. Mi bandera es de color {color.color} y blanco
        </p>
      <button
        type="button"
        onClick={nuevoCOlor}
      >Morado</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Banderar/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
