import React from 'react';
import './sesion.css'
import image2 from "./sesion.png"

const sesion = () => {
    return (
        <div>
        <img className="center-logo" src={image2}></img>
        <h1 className='titulo'>Iniciar sesión</h1>

        <div className="formulario">
            <label htmlFor="name">Usuario:</label>
            <input type="name" id="name" name="name" placeholder="" />
            <label htmlFor="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" name="contraseña" placeholder="" />
        </div>
        </div>
    );
};
 
export default sesion;
