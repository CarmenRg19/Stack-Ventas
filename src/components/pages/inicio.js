import React from 'react';
import Cards from './Cards';
 import './inicio.css'
 
const inicio = () => {
    return (
        <div>
        <h1 className='titulo-pagina'>Bienvenido a BOOKS HAVEN </h1>
        <Cards></Cards>
        </div>
    );
};
 
export default inicio;