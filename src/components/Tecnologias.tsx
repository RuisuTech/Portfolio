const tecnologias = [
  {
    title: "Front-End",
    images: [
      { src: "Html5.webp", alt: "Html5" },
      { src: "CSS.webp", alt: "CSS" },
      { src: "JS.webp", alt: "JS" },
      { src: "TS.webp", alt: "TS" },
      { src: "React.webp", alt: "React" },
    ],
  },
  {
    title: "Back-End",
    images: [
      { src: "Java.webp", alt: "Java" },
      { src: "SQL.webp", alt: "SQL" },
    ],
  },
  {
    title: "Development tools",
    images: [
      { src: "Git.webp", alt: "GIT" },
      { src: "GitHub.webp", alt: "GitHub" },
    ],
  },
];

function Tecnologias() {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <h1 className="text-5xl font-bold">Tecnologías</h1>
      {tecnologias.map((tecnologia, index) => (
        <div key={index} className="bg-[#212121] border border-[#333333] w-[300px] md:w-[745px] my-4">
          <div className="flex flex-wrap justify-center gap-4 p-4 text-[#27AE60] text-2xl font-bold">
            <div className="flex flex-col justify-center items-center">
              <h1>{tecnologia.title}</h1>
              <div className="flex flex-wrap justify-center gap-4">
                {tecnologia.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    className="w-auto h-[75px] mt-4"
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tecnologias;
