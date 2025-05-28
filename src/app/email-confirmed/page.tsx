// app/email-confirmed/page.tsx
'use client';
import Image from 'next/image';

export default function EmailConfirmedPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <Image
          src="/images/logousina2.png"
          alt="Logo del Gym"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <div className="text-6xl text-green-500 mb-4">✔️</div>
        <h2 className="text-2xl font-semibold mb-2">¡Correo verificado correctamente!</h2>
        <p className="text-lg text-zinc-300">Ya podés cerrar esta pestaña e iniciar sesión en la app.</p>
      </div>
    </div>
  );
}
