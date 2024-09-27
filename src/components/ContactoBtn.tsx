import { useState } from "react";
import { copyEmailToClipboard, downloadCV } from "./ContactoUtils";

function ContactoBtn() {
  const [message, setMessage] = useState<string | null>(null);
  const email = "JoseLuisOsorioGuzman11@gmail.com";

  const handleCopy = async () => {
    const resultMessage = await copyEmailToClipboard(email);
    setMessage(resultMessage);
    setTimeout(() => setMessage(null), 3000);
  };

  const handleDownloadCV = () => {
    downloadCV("JoseLuisGuzman_CV.pdf");
  };

  return (
    <div>
      <div className="flex gap-2">
        <button
          onClick={handleDownloadCV}
          className="bg-[#27AE60] text-[#171717] hover:bg-[#1d9c53] border-[#1d9c53] border-[1px] px-3 py-2"
        >
          Descargar CV
        </button>
        <button
          onClick={handleCopy}
          className="bg-[#171717] hover:bg-[#3D3D3D] border-[#F2F2F2] border-[1px] px-3 py-2"
        >
          Copiar Gmail
        </button>
      </div>
      {message && <div className="mt-2 text-green-500">{message}</div>}
    </div>
  );
}

export default ContactoBtn;
