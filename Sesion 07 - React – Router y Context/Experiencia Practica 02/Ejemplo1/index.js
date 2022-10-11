import React from 'react';
import { useState, createContext, useContext } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

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
 
