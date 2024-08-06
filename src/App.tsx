import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
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
          <div className="md:px-[10%]">
            <Header />
            <SobreMi />
            <Proyectos />
            <Tecnologias />
            <Footer />
          </div>
        } />
        <Route path="/Proyectos" element={<RouterProyectos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/*" element={<Error />} />
        {/* Otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
