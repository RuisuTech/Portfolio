import ContactoBtn from "./ContactoBtn";
import Header from "./Header";

function Contacto() {
  return (
    <>
      <div className="h-screen md:px-[10%]">
        <Header />
        <div className="flex h-[80vh] flex-col justify-center items-center text-center gap-4 pt-[72px]">
            <h1 className="text-5xl font-bold">Hola, Soy Jose Luis Guzman</h1>
            <p className="text-lg font-medium text-center text-[#828282]">
              Full Stack Developer <br />
              JoseLuisOsorioGuzman11@gmail.com
            </p>
            <div className="flex text-sm font-normal gap-2">
              <ContactoBtn/>
            </div>
          </div>
      </div>
    </>
  );
}

export default Contacto;
