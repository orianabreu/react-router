import React from 'react';
import { Link } from 'react-router-dom';

//paso 1: instalar la librería react-router-dom
// paso 2: en el componente navbar importar Link de RRD
// paso 3: envolver todos los links que queremos tener en el navbar con el comp Link de RRD
// paso 4: agregar el atr to con el nombre de las rutas que queremos crear
// paso 5: ir al fichero App.js

export default function NavBar() {
  return (
    <nav className='navbar'>
        <Link to="home">Home</Link>
        <Link to="/contacto">Contacto</Link>
    </nav>
  )
}
