import React from 'react';
import banner from '../assets/banner.jpg';
import { Link } from 'react-router-dom';


const Header = () => (
  <header style={{ backgroundImage: `url(${banner})` }}>
    <div className="contenedor">
      <nav className="menu">
        <a href="/">Inicio</a>
        <a href="#">Acerca de</a>
        <a href="#portafolio">Portafolio</a>
        <a href="#">Contacto</a>
        <Link to="/equipo">Equipo</Link>
        <Link to="/donde-estamos">¿Dónde Estamos?</Link>
      </nav>
      <div className="contenido-header">
        <h1 className="titulo-header">Sofia</h1>
        <span className="linea-header"></span>
        <h2 className="texto-header">
          Full stack developer<span className="desaparecer"></span>
        </h2>
        <a href="#" className="action-header">Contáctar</a>
      </div>
    </div>
  </header>
);

export default Header;
