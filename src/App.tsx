import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Tecnologias from './components/Tecnologias';
import Contacto from './components/Contacto';
import RouterProyectos from './components/RouterProyectos'; // Importa RouterProyectos
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            
            <SobreMi />
            <Proyectos />
            <Tecnologias />
            <Footer />
          </div>
        } />
        <Route path="/SobreMi" element={<SobreMi />} />
        <Route path="/Proyectos" element={<RouterProyectos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/*" element={<Error />} />
        {/* Otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
