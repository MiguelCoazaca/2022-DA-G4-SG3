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
