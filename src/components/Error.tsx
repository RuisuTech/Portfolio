import ContactoBtn from "./ContactoBtn";
import Header from "./Header";

function Error() {
  return (
    <>
      <div className="h-screen md:px-[10%]">
        <Header />
        <div className="flex h-[80vh] flex-col justify-center items-center text-center gap-4">
            <h1 className="text-5xl font-bold">404: Waifu not found!</h1>
            <p className="text-lg font-medium text-center text-[#828282]">
            La waifu que buscas se ha escapado de la página. Intenta buscarla en otro lugar, tal vez en otro capítulo. <br />
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

export default Error;
