interface Datos {
    name: string;
    tech: string;
    repo: string;
    link: string;
}



function Tarjeta({ name, tech, repo, link }: Datos) {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#212121] w-[350px] md:w-[450px] p-4 mt-4">  
        <a className="overflow-hidden" href={link}><img className="w-full hover:scale-105 duration-300" src="Gato.webp" alt="Proyecto" /></a>
        <a className="text-[#ffffff] hover:text-[#eeeeee] font-medium text-2xl mt-2" href={link}>{name}</a>
        <p className="text-[#535353] font-normal text-xl mt-2">
          {tech}
        </p>
        <a
          className="text-[#27AE60] hover:text-[#1d9c53] font-bold text-xl mt-2"
          href={repo}
          target="_blank"
        >
          Repositorio
        </a>
      </div>
    </>
  );
}

export default Tarjeta;