// App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Quienes from './components/Quienes/Quienes';
import QueHacemos from './components/QueHacemos/QueHacemos';
import Portafolio from './components/Portafolio/Portafolio';
import Contacto from './components/Contacto/Contacto';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Quienes />
        <QueHacemos />
        <Portafolio />
        
        <Outlet /> {/* Renderiza contenido adicional si es necesario */}
      </main>
      <footer>
      <Contacto />
      </footer>
    </div>
  );
}

export default App;
