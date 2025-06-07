export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="bg-zinc-900 rounded-2xl shadow-xl p-8 max-w-3xl w-full border border-zinc-700">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Política de Privacidad – App Gimnasio
        </h1>

        <p className="text-gray-300 mb-4">
          En <span className="font-semibold text-white">La Vieja Usina</span>, nos tomamos en serio tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información personal.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-white">1. Información que recopilamos</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Nombre</li>
          <li>Apellido</li>
          <li>Correo electrónico</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-white">2. Uso de la información</h2>
        <p className="text-gray-300 mb-4">
          Utilizamos esta información únicamente para personalizar y mostrar tu rutina de entrenamiento dentro de la aplicación. No compartimos tu información con terceros.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-white">3. Almacenamiento de datos</h2>
        <p className="text-gray-300 mb-4">
          Todos los datos se almacenan de forma segura en servidores protegidos. Implementamos medidas técnicas y organizativas para garantizar su seguridad.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-white">4. Derechos del usuario</h2>
        <p className="text-gray-300 mb-2">
          Podés acceder, modificar o eliminar tus datos personales en cualquier momento.
        </p>
        <p className="text-gray-300 mb-4">
          Para hacerlo, escribinos a <a href="mailto:soporte@tugym.com" className="text-blue-500 underline hover:text-blue-400">soporte@tugym.com</a> o desde la sección de "Eliminar Cuenta" en la app.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-white">5. Cambios en esta política</h2>
        <p className="text-gray-300 mb-4">
          Esta Política de Privacidad puede actualizarse ocasionalmente. Notificaremos los cambios relevantes a través de la app o mediante correo electrónico.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-white">6. Contacto</h2>
        <p className="text-gray-300">
          Si tenés preguntas sobre esta política, podés contactarnos en <a href="mailto:soporte@tugym.com" className="text-blue-500 underline hover:text-blue-400">soporte@tugym.com</a>.
        </p>
      </div>
    </div>
  );
}
