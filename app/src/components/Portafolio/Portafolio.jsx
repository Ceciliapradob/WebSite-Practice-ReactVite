import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';

const Portafolio = () => {
  const fotos = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="portafolio" id='portafolio'>
      <div className="contenedor">
        <div className="portafolio-textos">
          <h2>Haz de tu trabajo algo extraordinario</h2>
          <p>Contactame si estás preparado</p>
        </div>
        <section className="galeria">
          {fotos.map((foto, index) => (
            <div className="fotos" key={index}>
              <img src={foto} alt="" />
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Portafolio;
