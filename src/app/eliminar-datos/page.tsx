export default function EliminarDatosPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="bg-zinc-900 rounded-2xl shadow-xl p-8 max-w-xl w-full border border-zinc-700">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">
          Eliminación de Datos Personales
        </h1>

        <p className="mb-4 text-gray-300 text-center">
          Nos tomamos muy en serio tu privacidad. Podés solicitar la eliminación completa de tus datos personales asociados a tu cuenta en la app <span className="font-semibold text-white">Bicho3</span>.
        </p>

        <p className="mb-4 text-gray-400 text-center">
          Para hacerlo, tenés dos opciones:
        </p>

        <ul className="mb-4 text-gray-300 list-disc list-inside">
          <li>Desde la app: <span className="text-white font-medium">Perfil &gt; Eliminar Cuenta</span></li>
          <li>Por correo: enviando una solicitud a <a href="mailto:soporte@tudominio.com" className="text-blue-500 underline hover:text-blue-400">soporte@tudominio.com</a></li>
        </ul>

        <p className="text-sm text-center text-gray-500">
          Una vez recibida tu solicitud, todos los datos personales serán eliminados de forma permanente en un plazo máximo de 7 días hábiles.
        </p>
      </div>
    </div>
  );
}
