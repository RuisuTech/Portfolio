function DescargarCV() {
  const DescargarCV = () => {
    // Crear un enlace temporal y hacer clic en él para descargar el archivo
    const link = document.createElement("a");
    link.href = "/CertificadoEstudio.pdf"; // Asegúrate de ajustar la ruta del archivo
    link.download = "CertificadoEstudios.pdf"; // Nombre del archivo que se descargará
    link.click();
  };

  return (
    <button
      onClick={DescargarCV}
      className="bg-[#27AE60] hover:bg-[#1d9c53] border-[#27AE60] border-[1px] px-2 py-1"
    >
      Descargar CV
    </button>
  );
}

export default DescargarCV;
