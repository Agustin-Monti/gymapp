'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function ChangePassword() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  // Verifica si el usuario está autenticado al cargar la página
  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        setMessage('Token inválido o expirado. Intenta solicitar otro correo de recuperación.');
      }
    };

    checkUser();
  }, []);

  // Función para cambiar la contraseña
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage('Error al cambiar la contraseña: ' + error.message);
    } else {
      setMessage('Contraseña cambiada correctamente. Redirigiendo al login...');
      setTimeout(() => router.push('/login'), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleChangePassword} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">Cambiar Contraseña</h1>

        {message && <p className="mb-4 text-red-500">{message}</p>}

        <label className="block mb-2">Nueva contraseña</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Cambiar contraseña
        </button>
      </form>
    </div>
  );
}
