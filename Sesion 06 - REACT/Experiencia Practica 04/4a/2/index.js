import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
class SegundoConEstado extends React.Component{
  constructor(props){
    super(props);
    //Aquí se puede inicializar cualquier valor
    this.state ={
      contador:0,
      mensaje:""
    }
  };

  miSuma = () =>{
    
    if(this.state.contador % 2 == 0){
      console.log(this.state.contador);
      
      this.setState({
        contador : this.state.contador + 1,
        mensaje : "Falso"        
      });
    }
    else
      this.setState({
        contador : this.state.contador + 1,
        mensaje : "Verdad"        
      });
    
  }


  render(){
    return (
      <div>
        <h1 onClick={this.miSuma}>Click para saber si es Verdadero o Falso</h1>
        <h1>{this.state.contador}</h1>
        <h1>{this.state.mensaje}</h1>
      </div>
    );
  }
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SegundoConEstado/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
