import React from "react";
import { Link } from "react-router-dom";
import { BsMoonStarsFill as MoonIcon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useTheme, useUpdateTheme } from "../../context/ThemeContext";

//paso 1: instalar la librería react-router-dom
// paso 2: en el componente navbar importar Link de RRD
// paso 3: envolver todos los links que queremos tener en el navbar con el comp Link de RRD
// paso 4: agregar el atr to con el nombre de las rutas que queremos crear
// paso 5: ir al fichero App.js

export default function NavBar() {
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();

  const styles = {
    backgroundColor: darkTheme ? "#212529" : "lightblue",
    color: darkTheme ? "white" : "darkblue",
  };

  return (
    <nav className='navbar' style={styles}>
      <Link to='/posts'>Home</Link>
      <Link to='/contacto'>Contacto</Link>
      <Link to='/custom-counter'>Contador</Link>
      {darkTheme ? (
        <FiSun onClick={toggleTheme} />
      ) : (
        <MoonIcon onClick={toggleTheme} />
      )}
    </nav>
  );
}
