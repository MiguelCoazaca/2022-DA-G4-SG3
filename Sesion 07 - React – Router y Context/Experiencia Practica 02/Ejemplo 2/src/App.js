import React,{useEffect, useState} from 'react';
import './App.css';
function App() {

  const [stateWeb, setStateWeb] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() =>{
    console.log("Total: "+contar);

  },[contar])

  const encenderApagar = () => {
    setStateWeb(prevValue => !prevValue);
    setContar(contar+1);
  };
  return (
    <div className="container">
      
      <button />
      <header className="cabecera">

        <h3>La pagina Web esta: {stateWeb ? "Encendida" : "Apagada"}</h3>
        <h4>Clicks Hechos: {contar}</h4>
        <button onClick={encenderApagar}> Encender/ Apagar</button>
        <p>
          <code>Uso de UseEffect  -</code> Desarrollo de Aplicaciones.
        </p>
        <button />
      </header>
    </div>
  );  
}

export default App;

