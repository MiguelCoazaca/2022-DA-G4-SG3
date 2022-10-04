import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Header(){ return (<header><h1>Cabecera</h1></header>);}
function Footer(){ return (<footer><h2>PiePagina</h2></footer>);}
function Main(){ return (<main><h2>ContenidoPrincipal</h2></main>);}
function Sumar(num){ return (<sumar><h4>{num+num}</h4></sumar>);}
function Saludo(name){ return (<saludo><h2>Hello {name}</h2></saludo>);}
function Fecha(){ return (<fecha><h2>Fecha: {new Date().toLocaleDateString()} </h2></fecha>);}
function Hora(){ return (<hora><h2> Hora: {new Date().toLocaleTimeString()}</h2></hora>);}

function Agrupador(miParam){
  console.log(miParam);
  return (<div>{miParam}
  <Header/>
  <Main/>
  <Footer/>
  {Sumar(2)}
  {Saludo('Nadia')}
  {Saludo('Miguel')}
  {Saludo('Alexandra')}
  <Fecha/>
  <Hora/>
  </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Agrupador('Probando.....'));