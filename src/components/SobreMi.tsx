import ContactoBtn from "./ContactoBtn";
import Footer from "./Footer";
import Header from "./Header";

function SobreMi() {
  return (
    <>
      <div className="">
        <Header />
        <div className="flex justify-center md:justify-between items-center p-4 flex-wrap mt-[72px] px-[10%]">
          <div className="flex flex-col md:items-start items-center text-center gap-4">
            <h1 className="text-5xl font-bold">Hola, Soy Jose Luis Guzman</h1>
            <p className="text-lg font-medium text-center md:text-left text-[#828282]">
              Full Stack Developer <br />
              JoseLuisOsorioGuzman11@gmail.com
            </p>
            <div className="flex text-sm font-normal gap-2 w-full justify-center md:justify-start">
              <ContactoBtn />
            </div>
          </div>
          <div>
            <div className="rounded-full p-4 border-[#202020] border-[1px] bg-[#1E1D1D33] mt-4">
              <img
                className="rounded-full object-cover border-[#202020] border-[1px] md:w-[450px] md:h-[450px] w-[350px] h-[350px]"
                src="/Gato.webp"
                alt="Perfil"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="w-[300px] flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold">Sobre mi</h1>
            <p className="w-[300px] md:w-[745px] text-lg font-normal pt-4">
              Soy una persona apasionada por la programación y estoy decidido a
              aprender de manera autodidacta y convertirme en un desarrollador
              de software competente. Estoy en busca de oportunidades que me
              permitan aplicar mis conocimientos y crecer como programador.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SobreMi;
