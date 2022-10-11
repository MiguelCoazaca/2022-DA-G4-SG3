import React from 'react';
import { useState, createContext, useContext } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const UserContext = createContext();
function Component1() {
 const [user, setUser] = useState("Andy");
 return (
 <UserContext.Provider value={user}>
 <h1>{`Hello ${user}!`}</h1>
 <Component2 />
 </UserContext.Provider>
 );
}
function Component2() {
  return (
  <>
  <ul>
  
    <p>To travel around the world you must to know</p>
    <Component3 />

  </ul>
    </>
    );
}
function Component3() {
  return (
 <>
 <ul>
 <li><p>The language of the country</p></li>
 <li><p>The turistic places</p></li>
  <li>  <p>Which is the type of the currency</p></li>
  <li>  <p>When is the best time to go</p></li>
    <Component5 />
    </ul>
    </>
  
    );
}

function Component5() {
 const user = useContext(UserContext);
 return (
 <>
    <p>This are some recomendations to Travel abroad</p>
    <h2>{`It was a pleasure to let you know something new. Goodbye ${user} see you later!`}</h2>
    </>
    );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);


/*
const UserContext = createContext();
const Usernuevo = () => useContext(UserContext);

const Saludo = () =>{
  const [state,setState] = Usernuevo ();

  return( <input type="text" onChange={ (e) => {setState({ ...state, name:e.target.value})}} />
  );
}

const Mostrar = () => {
  const [state, setState] = Usernuevo();
  return ( 
  <p>Bienvenid@ <strong> {state.name}</strong></p>);
}

const Pregunta = () => {
  const [state, setState] = Usernuevo();
  return ( 
    <div class="check">
      <label class= "margen">
        <input type = "checkbox"/>Estoy bien
      </label>
      <label class= "margen">
        <input type = "checkbox"/>Estoy regular
      </label>
      <label class= "margen">
        <input type = "checkbox"/>Estoy mal
      </label>
      <p>Cómo te encuentras?</p>
    </div>
  );
}

const Respuesta = () => {
  const [state, setState] = Usernuevo();
  return(
    <h3>Espero que pronto estes mejor, un abrazo virtual  </h3>
  )
}

const Provider = ({ children }) =>{
  const [state,setState] = useState({});
  return (            
          <UserContext.Provider value={[state,setState]}>
              {children}
          </UserContext.Provider>  
  );
}
function Component1() {
  const [user, setUser] = useState("Ingresa tu nombre por favor");
  return (
    <UserContext.Provider value={user}>
    <h1>{`Hello ${user}!`}</h1>
    <Provider>
      <Saludo/>
      <Mostrar/>
      <Pregunta/>
      <Respuesta/>
    </Provider>
    </UserContext.Provider>
    
  );
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
 
*/ 










/*
function Cambio() {
  //Arreglo que contiene saludo y despedida
  const [cambio, setDespedida] = useState({
    saludo:  "Hola",
    despedida: "Adios"
  });
  //Funciones de cambio
  const despedidafrances = () => {
    setDespedida(previousState => {
      return { ...previousState, saludo: 'Bonjour', despedida: "A bientot" }
    });
  }
  const despedidaingles = () => {
    setDespedida(previousState => {
      return { ...previousState, saludo: 'Welcome',despedida: "Goodbye" }
    });
  }
  const despedidaportugues = () => {
    setDespedida(previousState => {
      return { ...previousState, saludo: 'Olá',despedida: "Adeus" }
    });
  }

  return (
    <>
      <h1><strong>{cambio.saludo}</strong> </h1>
      <p class= 'texto'>Estamos Aprendiendo <strong>React</strong></p>
      <h1><strong>{cambio.despedida}</strong></h1>
      <br></br>
      <p>Si presionas el boton cambia mi saludo y mi despedida</p>
      <button class = 'boton1'
        type="button"
        onClick={despedidafrances}
      ><strong>Frances</strong></button>
      <button class = 'boton2'
        type="button"
        onClick={despedidaingles}
      ><strong>Ingles</strong></button>
       <button class = 'boton3'
        type="button"
        onClick={despedidaportugues}
      ><strong>Portugues</strong></button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cambio/>)
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
