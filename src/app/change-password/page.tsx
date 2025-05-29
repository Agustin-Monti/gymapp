'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; // tu cliente supabase

export default function ChangePasswordPage() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Obtener access_token del query string al montar el componente
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('access_token');
    if (token) {
      setAccessToken(token);
    } else {
      setMessage('Token de acceso no válido o faltante.');
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

    try {
      // Aquí pasas el token al updateUser
      const { error } = await supabase.auth.updateUser({ password }); // ✅


      if (error) {
        setMessage('Error: ' + error.message);
      } else {
        setMessage('Contraseña cambiada correctamente. Ya podés iniciar sesión.');
      }
    } catch (e) {
      setMessage('Error inesperado: ' + e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl mb-6">Cambiar contraseña</h1>
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
        disabled={loading || !accessToken}
        onClick={handleChangePassword}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded disabled:opacity-50"
      >
        {loading ? 'Cambiando...' : 'Cambiar contraseña'}
      </button>
    </div>
  );
}
