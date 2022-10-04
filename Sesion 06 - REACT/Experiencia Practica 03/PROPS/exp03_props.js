import React from 'react';
import ReactDOM from 'react-dom/client';

function Example(props) {
  return <h1>BIENVENIDA { props.brand }!</h1>;
}
function Search(props) {
  return <h2>Ingresa tu consulta { props.brand }!</h2>;
}
function Ingresar(props) {
  return <h2>Ingresa tu apellido { props.brand }!</h2>;
}
function Cambiar(props) {
  return <h2>Desea cambiar { props.brand }!</h2>;
}
function Califica(props) {
  return <h3>Del 1 al 10 { props.brand }!</h3>;
}


function Head() {
  const name = "NADIA";
  const props = "=..PROPS"
  const appe = "CHAVEZ"
  const change = "YES"
  const estrella = "10"

  return (
    <>
      <h1>GOOGLE</h1>
      <Example brand={ name } />
      <Search brand={props} />
      <Ingresar brand={appe} />
      <Cambiar brand={change} />
      <Califica brand ={estrella} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Head />);