import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Us from "./pages/Us";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="container">
      <h1> Primera pagina en REACT</h1>
      <hr />
      <Navbar />
      
      <hr />
        <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/contacto" element = {<AboutPage/>}/>
        <Route path="/nosotros" element = {<Us/>}/>
        <Route path='*' element ={<NotFoundPage/>}>


        </Route>
        </Routes>

    </div>
    </Router>
  );
}

export default App;
