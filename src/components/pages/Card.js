import React from 'react';
import './card.css'

export default function Card({ id, title, image, autor, precio }) {
    return (
      <div className='CardContainer'>
        <div className='Card-body text-center bg-white'>
          <div className='Card-body text-ligt'>
            <img src={image} alt='' className='Card-img-top' />
            <h4 className='book-title'>{title}</h4>
            <p className='book-text text-secondary'>Autor: {autor}</p>
            <p1 className='book-text text-secondary'> Precio: {precio}</p1>
            
          </div>
          <button className='mi-boton'>Agregar al carrito</button>
        </div>
      </div>
    );
  }
  

/*export default function Card ({id, title, image, autor}){
    return(
        
        <div className='Card text-center bg-white;'>
            <div className='Card-body text-ligt'>
                <img src={image} alt= "" className='Card-img-top' ></img>
            <h4 className='book-title'>{title}</h4>
            <p className='book-text text-secondary'>
                Autor: {autor}
            </p>
            <button className='mi-boton'>Agregar al carrito</button>
            
            </div>
        </div>
    )
}*/