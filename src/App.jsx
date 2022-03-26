import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./main.scss";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Contacto from "./pages/Contacto/Contacto";
import Login from "./pages/Login/Login";
import SinglePost from "./pages/SinglePost/SinglePost";
import Counter from "./pages/Counter/Counter";
import ThemeProvider from "./context/ThemeContext";

//paso 6: importar de RRD -> BrowserRouter as Router, Routes, Route

function App() {
  return (
    // paso 7: envolvemos todos los componentes que vayamos a renderizar con Router
    <Router>
      <ThemeProvider>
        <div className='App'>
          {/* navbar es el elemento común, con lo cual NO IRÁ DENTRO DE ROUTES */}
          <NavBar />

          {/* paso 8: solo los componentes que necesiten ruta irán dentro de Routes */}
          <Routes>
            {/* paso 9: renderizar los componentes/páginas de nuestra interfaz dentro de Route */}
            <Route path='/' element={<Login />} />
            <Route path='posts' element={<Home />} />
            <Route path='contacto' element={<Contacto />} />
            <Route path='single-post/:postId' element={<SinglePost />} />
            <Route path='custom-counter' element={<Counter />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
