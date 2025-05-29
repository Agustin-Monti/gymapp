'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; // importa tu cliente

export default function ChangePasswordPage({ searchParams }: { searchParams: { access_token?: string } }) {
  const [email, setEmail] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    async function initSession() {
      if (!searchParams.access_token) {
        setMessage('Token no encontrado en la URL.');
        return;
      }

      const { data, error } = await supabase.auth.setSession({
        access_token: searchParams.access_token,
        refresh_token: '', // si no tienes, puedes dejar vacío
      });

      if (error) {
        setMessage('Error iniciando sesión: ' + error.message);
        return;
      }

      if (data.session?.user.email) {
        setEmail(data.session.user.email);
      } else {
        setMessage('No se pudo obtener el email del usuario.');
      }
    }

    initSession();
  }, [searchParams.access_token]);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setMessage('Error cambiando la contraseña: ' + error.message);
    } else {
      setMessage('Contraseña cambiada correctamente.');
      setNewPassword('');
    }

    setLoading(false);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Cambiar contraseña</h1>
      {message && <p>{message}</p>}

      {email ? (
        <>
          <p>Hola, {email}</p>
          <form onSubmit={handleChangePassword}>
            <label htmlFor="password">Nueva contraseña:</label>
            <input
              id="password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={6}
              style={{ marginLeft: 10 }}
            />
            <button type="submit" disabled={loading} style={{ marginLeft: 10 }}>
              {loading ? 'Cambiando...' : 'Cambiar contraseña'}
            </button>
          </form>
        </>
      ) : (
        !message && <p>Cargando usuario...</p>
      )}
    </main>
  );
}
