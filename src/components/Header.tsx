import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-40 px-[10%] w-screen h-[72px] bg-[#171717E6] backdrop-blur-lg">
      <div className="flex justify-between h-full items-center gap-4">
        <Link className="text-4xl font-bold hover:text-[#1d9c53]" to="/">
          JLG
        </Link>

        {/* Botón de hamburguesa */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`block w-full h-[2px] bg-white absolute transition-transform duration-300 ${
              isOpen ? "rotate-45" : "mb-5"
            }`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-white absolute transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-white absolute transition-transform duration-300 ${
              isOpen ? "-rotate-45" : "mt-5"
            }`}
          ></span>
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
