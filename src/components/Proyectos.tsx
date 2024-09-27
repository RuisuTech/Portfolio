import Tarjeta from "./Tarjeta";

function Proyectos() {
  return (
    <>
      <div className="text-center mt-[72px]">
        <h1 className="text-5xl font-bold">Proyectos</h1>
        <div className="flex flex-wrap items-center justify-center my-4 gap-4 w-full">
          <Tarjeta
            name={"Enlaces Sociales"}
            tech={"React TypeScript Talwind"}
            link={"https://social-links-beige.vercel.app/"}
            repo={"https://github.com/RuisuTech/Social-Links"}
            portada={"LinksCard.jpeg"}
          />
          <Tarjeta
            name={"Copia Netflix"}
            tech={"React TypeScript Talwind"}
            link={"https://net-waifu.vercel.app/"}
            repo={"https://github.com/RuisuTech/NetWaifu"}
            portada={"NetWaifu.jpeg"}
          />
          <Tarjeta
            name={"Form Card"}
            tech={"React TypeScript Talwind"}
            link={"https://form-card-phi.vercel.app/"}
            repo={"https://github.com/RuisuTech/Form-Card"}
            portada={"FormCard.jpeg"}
          />
        </div>
      </div>
    </>
  );
}

export default Proyectos;
