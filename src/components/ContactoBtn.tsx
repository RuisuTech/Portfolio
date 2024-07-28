import { useState } from "react";

function ContactoBtn() {
  const [message, setMessage] = useState<string | null>(null);
  const email = "JoseLuisOsorioGuzman11@gmail.com";

  const Copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Correo copiado al portapapeles");
    } catch (err) {
      console.error("Error al copiar el correo:", err);
      setMessage("No se pudo copiar el correo al portapapeles.");
    }
    // Oculta el mensaje después de 3 segundos
    setTimeout(() => setMessage(null), 3000);
  };

  const DescargarCV = () => {
    // Crear un enlace temporal y hacer clic en él para descargar el archivo
    const link = document.createElement("a");
    link.href = "/Jose_Luis_Osorio_Guzman_CV.pdf"; // Asegúrate de ajustar la ruta del archivo
    link.download = "Jose_Luis_Osorio_Guzman_CV.pdf"; // Nombre del archivo que se descargará
    link.click();
  };

  return (
    <div className="">
      <div className="flex gap-2">
        <button
          onClick={DescargarCV}
          className="bg-[#27AE60] text-[#171717] hover:bg-[#1d9c53] border-[#1d9c53] border-[1px] px-3 py-2"
        >
          Descargar CV
        </button>
        <button
          onClick={Copy}
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
