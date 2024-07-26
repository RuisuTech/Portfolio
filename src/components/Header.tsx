import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="flex md:justify-between justify-center items-center p-4">
        <h1 className="text-4xl font-bold hidden md:block">Logo</h1>
        <div className="flex flex-wrap justify-between items-center gap-4 text-lg font-normal pt-2">
          <Link to="/">Sobre mi</Link>
          <Link to="/Proyectos">Proyectos</Link>
          <Link to="/Contacto">Contacto</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
