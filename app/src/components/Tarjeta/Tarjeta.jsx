import React from 'react';

const Tarjeta = ({ img, title, text }) => (
  <div className="tarjeta">
    <img src={img} alt="" className="imagen-tarjeta" />
    <div className="contenido-tarjeta">
      <h3 className="titulo-tarjeta">{title}</h3>
      <p className="parrafo-tarjeta">{text}</p>
    </div>
  </div>
);

export default Tarjeta;
