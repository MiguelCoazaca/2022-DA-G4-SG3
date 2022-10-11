//import React from 'react';

//import React,{ useState } from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));

function tick(){
  const element = (
    <div>
      <h1>Creando una base de datos con NPM y NODE.js</h1>
      <p>Ejemplo (HORA PERU)</p>
      <h1>La hora es {new Date().toLocaleTimeString()}</h1>
    </div>
  )
  root.render(element);
}




setInterval(tick,1000);
