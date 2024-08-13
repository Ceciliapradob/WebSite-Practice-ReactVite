import React from 'react';

const Contacto = () => (
  <section className="contacto">
    <div className="contenedor">
      <div className="footer-textos">
        <h2>Contacta con nosotros</h2>
        <p>Lorem, ipsum dolor.</p>
      </div>
      <form action="" className="formulario" method="POST">
        <input type="text" placeholder="Nombre" id="nombre" name="nombre" required value="" />
        <input type="email" placeholder="Correo" id="correo" name="correo" required value="" className="email" />
        <textarea name="mensaje" id="mensaje" placeholder="Mensaje:"></textarea>
        <div className="derecha">
          <input className="boton derecha" type="submit" value="Contactar" name="submit" />
        </div>
      </form>
    </div>
  </section>
);

export default Contacto;
