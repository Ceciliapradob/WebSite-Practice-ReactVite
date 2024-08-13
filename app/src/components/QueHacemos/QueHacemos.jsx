import React from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import icono1 from '../assets/icono1.png';
import icono2 from '../assets/icono2.png';
import icono3 from '../assets/icono3.png';

const QueHacemos = () => {
  const tarjetas = [
    { img: icono1, title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis quaerat pariatur minima a veritatis.' },
    { img: icono2, title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis quaerat pariatur minima a veritatis.' },
    { img: icono3, title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis quaerat pariatur minima a veritatis.' },
  ];

  return (
    <section className="quehacemos">
      <div className="contenedor">
        <div className="contenido-cajas">
          {tarjetas.map((tarjeta, index) => (
            <Tarjeta key={index} {...tarjeta} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
