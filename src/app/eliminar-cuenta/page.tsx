export default function EliminarCuentaPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="bg-zinc-900 rounded-2xl shadow-xl p-8 max-w-xl w-full border border-zinc-700">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">
          Solicitud de Eliminación de Cuenta
        </h1>

        <p className="mb-4 text-gray-300 text-center">
          Si deseas eliminar tu cuenta de la aplicación <span className="font-semibold text-white">Bicho3</span>, podés hacerlo desde la app:
        </p>

        <div className="mb-4 text-center text-white font-medium">
          Perfil &gt; Eliminar Cuenta
        </div>

        <p className="mb-4 text-gray-400 text-center">
          También podés solicitar la eliminación por correo electrónico a:
        </p>

        <div className="text-center mb-6">
          <a
            href="mailto:soporte@tudominio.com"
            className="text-blue-500 underline hover:text-blue-400"
          >
            soporte@tudominio.com
          </a>
        </div>

        <p className="text-sm text-center text-gray-500">
          Procesaremos tu solicitud en un plazo máximo de 7 días hábiles.
        </p>
      </div>
    </div>
  );
}
