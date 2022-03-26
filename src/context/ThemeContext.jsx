import React, { useState, useEffect, useContext } from 'react';

// paso 2: crear los contextos
export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();
console.log(ThemeContext);

// paso 4: crear custom hooks para poder importar nuestra lógica en otros componentes
export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useUpdateTheme = () => {
    return useContext(ThemeUpdateContext);
}

export default function ThemeProvider({ children }) {
    //paso 1: crear la lógica para el cambio de tema oscuro 
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = darkTheme ? "#212529" : "white";
    });

    const toggleTheme = () => {
        //setDarkTheme(prevTheme => !prevTheme);
        setDarkTheme(!darkTheme);
    }

  return (
    //paso 3: renderizamos el contexto como componente accediento a la prop. Provider, añadimos el atr value y le pasamos el dato que queremos transmitir a otros componentes
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children} 
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
