import React from 'react';
import './login.css'
import image1 from "./Logo.png"
import image2 from "./piepag.png"
import {useNavigate } from 'react-router-dom';



const Login = (props) => {
    const navigate = useNavigate();

    return (
        
        <div>
            <img className="center-logo" src={image1}></img>
            <h1 className='titulo'>Book Haven</h1>
            <button onClick={() => navigate("/sesion") } className='boton'>Iniciar Sesión</button>
            <button onClick={() => navigate("/registro") } className='boton1'>Registrarme</button>         
        </div>
            
        
    );
};
 
export default Login;

