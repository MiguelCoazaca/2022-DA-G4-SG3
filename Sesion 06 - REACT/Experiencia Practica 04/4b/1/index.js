import React,{ useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Anti() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anti-Estres, presionaste {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Presiona
      </button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Anti/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
