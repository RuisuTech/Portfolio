import Tarjeta from "./Tarjeta";

function Proyectos() {
  return (
    <>
      <div className="text-center mt-[72px]">
        <h1 className="text-5xl font-bold">Proyectos</h1>
        <div className="flex flex-wrap items-center justify-center my-4 gap-4 w-full">
          <Tarjeta
            name={"Gato"}
            tech={"React"}
            link={"#"}
            repo={"https://github.com/RuisuTech"}
          />
          <Tarjeta
            name={"Gato"}
            tech={"React"}
            link={"#"}
            repo={"https://github.com/RuisuTech"}
          />
          <Tarjeta
            name={"Gato"}
            tech={"React"}
            link={"#"}
            repo={"https://github.com/RuisuTech"}
          />
        </div>
      </div>
    </>
  );
}

export default Proyectos;
