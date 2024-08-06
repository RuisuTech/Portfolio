import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='sticky top-0 z-40 w-full bg-[#171717E6] backdrop-blur-sm'>
      <div className="flex md:justify-between justify-center items-center p-4">
        <Link className="text-4xl font-bold hidden md:block hover:text-[#1d9c53]" to="/">JLG</Link>
        <div className="flex flex-wrap justify-between items-center gap-4 text-lg font-normal pt-2">
          <Link className='hover:text-[#1d9c53]' to="/">Sobre mi</Link>
          <Link className='hover:text-[#1d9c53]' to="/Proyectos">Proyectos</Link>
          <Link className='hover:text-[#1d9c53]' to="/Contacto">Contacto</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
