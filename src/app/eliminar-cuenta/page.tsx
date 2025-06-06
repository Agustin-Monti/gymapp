export default function EliminarCuentaPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center justify-center">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Eliminar cuenta</h1>
        <p className="mb-4">
          Si deseas eliminar tu cuenta de la aplicación <strong>Bicho3</strong>,
          puedes hacerlo directamente desde la app en la sección:{" "}
          <span className="font-medium">Perfil &gt; Eliminar cuenta</span>.
        </p>
        <p className="mb-4">
          También puedes solicitar la eliminación enviando un correo a:{' '}
          <a
            href="mailto:soporte@tudominio.com"
            className="text-blue-600 underline"
          >
            soporte@tudominio.com
          </a>
        </p>
        <p className="text-sm text-gray-600">
          Procesaremos tu solicitud en un plazo máximo de 7 días.
        </p>
      </div>
    </div>
  );
}
