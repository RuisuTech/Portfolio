import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-40 px-[10%] w-screen h-[72px] bg-[#171717E6] backdrop-blur-lg">
      <div className="flex justify-between h-full items-center gap-4">
        <Link
          className="text-4xl font-bold hover:text-[#1d9c53]"
          to="/"
        >
          JLG
        </Link>

        {/* Botón de hamburguesa */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={toggleMenu}
        >
          <span className="block w-full h-[2px] bg-white my-1"></span>
          <span className="block w-full h-[2px] bg-white my-1"></span>
          <span className="block w-full h-[2px] bg-white my-1"></span>
        </button>

        {/* Menú de navegación */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex z-50 flex-col md:flex-row h-screen justify-center items-center gap-4 md:text-lg md:font-normal text-2xl font-bold pt-2 absolute md:relative top-[72px] md:top-0 left-0 w-full md:w-auto bg-[#171717] md:bg-transparent`}
        >
          <Link className="hover:text-[#1d9c53] p-4 md:p-0" to="/SobreMi">
            Sobre mi
          </Link>
          <Link className="hover:text-[#1d9c53] p-4 md:p-0" to="/Proyectos">
            Proyectos
          </Link>
          <Link className="hover:text-[#1d9c53] p-4 md:p-0 pb-40" to="/Contacto">
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
