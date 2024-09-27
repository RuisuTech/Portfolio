import Tarjeta from "./Tarjeta";

const proyectos = [
  {
    name: "Enlaces Sociales",
    tech: "React TypeScript Tailwind",
    link: "https://social-links-beige.vercel.app/",
    repo: "https://github.com/RuisuTech/Social-Links",
    portada: "LinksCard.jpeg",
  },
  {
    name: "Copia Netflix",
    tech: "React TypeScript Tailwind",
    link: "https://net-waifu.vercel.app/",
    repo: "https://github.com/RuisuTech/NetWaifu",
    portada: "NetWaifu.jpeg",
  },
  {
    name: "Form Card",
    tech: "React TypeScript Tailwind",
    link: "https://form-card-phi.vercel.app/",
    repo: "https://github.com/RuisuTech/Form-Card",
    portada: "FormCard.jpeg",
  },
];

function Proyectos() {
  return (
    <div className="text-center mt-[72px]">
      <h1 className="text-5xl font-bold">Proyectos</h1>
      <div className="flex flex-wrap items-center justify-center my-4 gap-4 w-full">
        {proyectos.map((proyecto, index) => (
          <Tarjeta key={index} {...proyecto} />
        ))}
      </div>
    </div>
  );
}

export default Proyectos;