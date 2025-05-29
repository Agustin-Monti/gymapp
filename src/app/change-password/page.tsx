'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ChangePasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    if (code) {
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        if (error) {
          setMessage('Error al autenticar el token: ' + error.message);
        }
      });
    }
  }, []);

  const handleChangePassword = async () => {
    if (!password || !confirmPassword) {
      setMessage('Por favor completa ambos campos');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage('Error al cambiar la contraseña: ' + error.message);
    } else {
      setMessage('Contraseña cambiada correctamente.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-zinc-900 p-4">
      <h1 className="text-2xl mb-4">Cambiar contraseña</h1>
      {message && <p className="mb-4">{message}</p>}
      <input
        type="password"
        placeholder="Nueva contraseña"
        className="mb-4 p-2 rounded bg-zinc-800 border border-zinc-700"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar nueva contraseña"
        className="mb-6 p-2 rounded bg-zinc-800 border border-zinc-700"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        onClick={handleChangePassword}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded disabled:opacity-50"
      >
        {loading ? 'Cambiando...' : 'Cambiar contraseña'}
      </button>
    </div>
  );
}
