/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <h1 style={{ fontWeight: "bold", fontSize: "30px", color: "#007BA7" }}>
          BOOKS HAVEN
        </h1>
        <p>
          
        </p>
      </header>
    </div>
  );
}

export default App; */

import React from 'react';
import './App.css';
import Navbar from './components/navegar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import Busqueda from './components/pages/busqueda';
import Carrito from './components/pages/carrito';
import Login from './components/pages/login';
import Inicio from './components/pages/inicio';
import Sesion from './components/pages/sesion';
import Registro from './components/pages/registro';


function App() {
    return (
      <div className='App'>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/busqueda' element={<Busqueda />} />
                <Route path='/carrito' element={<Carrito />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sesion' element={<Sesion />} />
                <Route path= '/registro' element={<Registro />} />
                
            </Routes>
        </Router>
      </div>
    );
}
document.body.style = `
  margin: 0;
  padding: 0;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,0.6465116279069767) 40%, rgba(148,187,233,1) 76%);
`;

export default App;
