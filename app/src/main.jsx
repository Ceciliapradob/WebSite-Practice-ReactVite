// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout/Layout';
import Equipo from './Pages/Equipo/Equipo';
import DondeEstamos from './Pages/DondeEstamos/DondeEstamos';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/', // Ruta principal de la aplicación
    element: <App />, // El componente que se renderiza en esta ruta es 'App'
  },
  {
    path: '/equipo', // Ruta específica para la página 'Equipo'
    element: <Layout />, // El componente 'Layout' se renderiza como contenedor para esta ruta
    children: [
      {
        path: '', // Ruta relativa para los hijos de '/equipo'
        element: <Equipo /> // El componente 'Equipo' se renderiza en esta ruta
      }
    ]

    // Se utiliza para mantener una estructura común en ciertas páginas de tu aplicación. En tu caso, Layout 
    // incluye el Header que debe aparecer en todas las páginas específicas (/equipo y /donde-estamos).
  },
  {
    path: '/donde-estamos', // Ruta específica para la página '¿Dónde estamos?'
    element: <Layout />, // El componente 'Layout' se renderiza como contenedor para esta ruta
    children: [
      {
        path: '', // Ruta relativa para los hijos de '/donde-estamos'
        element: <DondeEstamos /> // El componente 'DondeEstamos' se renderiza en esta ruta
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
