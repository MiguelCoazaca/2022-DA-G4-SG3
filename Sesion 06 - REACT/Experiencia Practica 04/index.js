import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Welcome extends React.Component{
  constructor(props){
    super();
    this.state = {
      cont:0,
    }
  }
  sumar =()=>{
    this.setState({
      cont: this.state + 1,
    });
  }
  restar = () =>{
    this.setState({
      cont: this.state -1,
    })
  }
  render(){
    const {cont} = this.state;
    return(
      <div>
        <div>
          <h2>Hola, Bienvenido!</h2>
          <button onCLick = {this.sumar} >Nuevo Usuario</button>
          <button onClick={this.restar} >Un Usuario Menos</button>
        </div>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
