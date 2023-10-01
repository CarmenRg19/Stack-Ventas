import React from 'react';
import './registro.css'
import image3 from "./registro.png"

const sesion = () => {
    return (
        <div>
        <img className="center-logo" src={image3}></img>
        <h1 className='titulo'>Registro</h1>

        <div className="formulario">
            <label htmlFor="name">Nombre/s:</label>
            <input type="text" id="name" name="name" placeholder="" />

            <label htmlFor="name">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" placeholder="" style={{ marginBottom: '-25px' }} />

            <div className="botones">
                <button style={{ marginRight: '50px', borderRadius: '20px', border: 'none', padding: '5px 25px' }}>Guardar</button>
                <button style={{ borderRadius: '20px',border: 'none', padding: '5px 25px' }}>Cancelar</button>
            </div>


            <label htmlFor="email">Correo Electronico:</label>
            <input type="email" id="email" name="email" placeholder="" />

            <label htmlFor="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" name="contraseña" placeholder="" />



        </div>

        </div>
    );
};
 
export default sesion;