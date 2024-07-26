import CopiarGmail from "./CopiarGmail";
import DescargarCV from "./DescargarCV";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-center text-center gap-4 mb-4">
        <p className="text-lg font-medium text-center md:text-center text-[#828282]">
          Full Stack Developer <br />
          JoseLuisOsorioGuzman11@gmail.com
        </p>
        <div className="flex text-sm font-normal gap-2">
          <DescargarCV />
          <CopiarGmail />
        </div>
      </div>
    </>
  );
}

export default Footer;