function Tecnologias() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-4">
        <h1 className="text-5xl font-bold">Tecnologias</h1>
        <div className="bg-[#212121] border border-[#333333] w-[300px] md:w-[745px] my-4">
          <div className="flex flex-wrap justify-center gap-4 p-4 text-[#27AE60] text-2xl font-bold">
            <div className="flex flex-col justify-center items-center">
              <h1>Front-End</h1>
              <div className="flex flex-wrap justify-center gap-4">
                <img className="w-auto h-[75px] mt-4" src="Html5.webp" alt="Html5" />
                <img className="w-auto h-[75px] mt-4" src="CSS.webp" alt="CSS" />
                <img className="w-auto h-[75px] mt-4" src="JS.webp" alt="JS" />
                <img className="w-auto h-[75px] mt-4" src="TS.webp" alt="TS" />
                <img className="w-auto h-[75px] mt-4" src="React.webp" alt="React" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#212121] border border-[#333333] w-[300px] md:w-[745px] my-4">
          <div className="flex flex-wrap justify-center gap-4 p-4 text-[#27AE60] text-2xl font-bold">
            <div className="flex flex-col justify-center items-center">
              <h1>Back-End</h1>
              <div className="flex flex-wrap justify-center gap-4">
                <img className="w-auto h-[75px] mt-4" src="Java.webp" alt="Java" />
                <img className="w-auto h-[75px] mt-4" src="Spring.webp" alt="Spring" />
                <img className="w-auto h-[75px] mt-4" src="SQL.webp" alt="SQL" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#212121] border border-[#333333] w-[300px] md:w-[745px] my-4">
          <div className="flex flex-wrap justify-center gap-4 p-4 text-[#27AE60] text-2xl font-bold">
            <div className="flex flex-col justify-center items-center">
              <h1>Development tools</h1>
              <div className="flex flex-wrap justify-center gap-4">
                <img className="w-auto h-[75px] mt-4" src="Git.webp" alt="GIT" />
                <img className="w-auto h-[75px] mt-4" src="GitHub.webp" alt="GitHub" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tecnologias;
