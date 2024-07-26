import { useState } from 'react';

function CopiarGmail() {
  const [message, setMessage] = useState<string | null>(null);
  const email = "JoseLuisOsorioGuzman11@gmail.com";

  const Copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setMessage('Correo copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar el correo:', err);
      setMessage('No se pudo copiar el correo al portapapeles.');
    }
    // Oculta el mensaje después de 3 segundos
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className='flex gap-2'>
      <button
        onClick={Copy}
        className="bg-[#171717] hover:bg-[#3D3D3D] border-[#F2F2F2] border-[1px] px-3 py-2"
      >
        Copiar Gmail
      </button>
      {message && <div className="mt-2 text-green-500">{message}</div>}
    </div>
  );
}

export default CopiarGmail;
