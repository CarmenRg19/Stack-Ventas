import React from 'react';
import Card from './Card';
import b1 from "./book1.jpg"
import b2 from "./book2.jpg"
import b3 from "./book3.jpg"
import b4 from "./book4.jpeg"
import b5 from "./book5.jpg"
import b6 from "./book6.jpg"
import b7 from "./book13.jpg"
import b8 from "./book8.jpg"
import b9 from "./book9.jpg"
import b10 from "./book10.jpg"
import b11 from "./book11.jpg"
import b12 from "./book12.jpg"
import b13 from "./book13.jpg"
import b14 from "./book14.jpg"
import b15 from "./book15.jpg"
import b16 from "./book16.jpg"
import b17 from "./book17.jpg"
import b18 from "./book18.jpg"


const cards = [
    {
        id:1,
        title: 'A dos metros de ti',
        image: b1,
        autor: 'Rachael Lippincot',
        precio: '$250.00'
    },
    {
        id:2,
        title: 'Romper el circulo',
        image: b2,
        autor: 'Collen Hoover',
        precio: '$300.00'
    },
    {
        id:3,
        title: 'Los siete maridos de Evelyn Hugo',
        image: b3,
        autor: 'Taylor Jenkins Reid',
        precio: '$350.00'
    },
    {
        id:4,
        title: 'Orgullo y Prejuicio',
        image: b4,
        autor: 'Jane Austen',
        precio: '$250.00'
    },
    {
        id:5,
        title: 'Damián',
        image: b5,
        autor: 'Alex Mírez',
        precio: '$230.00'
        
    },
    {
        id:6,
        title: 'La vida invisible de Addie Larue',
        image: b6,
        autor: 'Victoria E. Schwab'
        ,
        precio: '$480.00'
    },
    {
        id:7,
        title: 'La reina de nada',
        image: b7,
        autor: 'Holly Black',
        precio: '$200.00'
        
    },
    {
        id:8,
        title: 'Las chicas de Alambre',
        image: b8,
        autor: 'Jordí Sierra I Fabra'
    },
    {
        id:9,
        title: 'La sombra del viento',
        image: b9,
        autor: 'Carlos Ruiz Zafón'
        ,
        precio: '$400.00'
    },
    {
        id:10,
        title: 'El juego del Angel',
        image: b10,
        autor: 'Carlos Ruiz Zafón',
        precio: '$430.00'
    },
    {
        id:11,
        title: 'El prisionero del Cielo',
        image: b11,
        autor: 'Carlos Ruiz Zafón',
        precio: '$300.00'
    },
    {
        id:12,
        title: 'El laberinto de los espiritus',
        image: b12,
        autor: 'Carlos Ruiz Zafón',
        precio: '$450.00'
    },
    {
        id:13,
        title: '',
        image: b13,
        autor: ''
    },
    {
        id:14,
        title: 'Nuestra parte de noche',
        image: b14,
        autor: 'Mariana Enriquez',
        precio: '$550.00'
    },
    {
        id:15,
        title: 'Biblioteca de media noche',
        image: b15,
        autor: 'Matt Haig',
        precio: '$300.00'
    },
    {
        id:16,
        title: 'La canción de Aquiles',
        image: b16,
        autor: 'Madeline Miller',
        precio: '$280.00'
    },
    {
        id:17,
        title: 'Arrancame la vida',
        image: b17,
        autor: 'Ángeles Mastretta',
        precio: '$200.00'
    },
    {
        id:18,
        title: 'La hojarasca',
        image: b18,
        autor: 'Gabriel García Marquez',
        precio: '$190.00'
    },
]

export default function Cards() {
    console.log();
    return (
      <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
          {cards.map((c) => (
            <div className='col-md-3 mb-3' key={c.id}>
              <Card
                key={c.id}
                id={c.id}
                title={c.title}
                image={c.image}
                autor={c.autor}
                precio={c.precio}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
/*export default function Cards (){
    console.log()
    return(
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {cards.map (c => (
                        <div className="col-md-4 mb-3" key={cards.id}>
                            <Card
                            key= {c.id}
                            id={c.id}
                            title= {c.title}
                            image= {c.image}
                            autor= {c.autor}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}*/