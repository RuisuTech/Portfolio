export const copyEmailToClipboard = async (email: string): Promise<string> => {
    try {
      await navigator.clipboard.writeText(email);
      return "Correo copiado al portapapeles";
    } catch (err) {
      console.error("Error al copiar el correo:", err);
      return "No se pudo copiar el correo al portapapeles.";
    }
  };
  
  export const downloadCV = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/${filename}`; // Asegúrate de ajustar la ruta del archivo
    link.download = filename;
    link.click();
  };
  