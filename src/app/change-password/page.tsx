'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { AuthError } from '@supabase/supabase-js';

export default function ChangePasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [codeExchanged, setCodeExchanged] = useState(false);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      supabase.auth
        .exchangeCodeForSession(code)
        .then(({ error }) => {
          if (error) {
            setMessage(`Error al validar el código: ${error.message}`);
          } else {
            setCodeExchanged(true);
          }
        });
    } else {
      setMessage('Código no encontrado en la URL.');
    }
  }, [searchParams]);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error instanceof AuthError) {
      setMessage(error.message);
    } else {
      setMessage('✅ Contraseña actualizada con éxito.');
      // Opcional: redirigir al login después de cambiar la contraseña
      // router.push('/login');
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 32, maxWidth: 400, margin: '0 auto' }}>
      <h2>Cambiar Contraseña</h2>

      {!codeExchanged ? (
        <p>Validando enlace...</p>
      ) : (
        <form onSubmit={handleChangePassword}>
          <label htmlFor="password">Nueva contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: 'block', width: '100%', marginTop: 8, marginBottom: 16 }}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Cambiando...' : 'Cambiar contraseña'}
          </button>
        </form>
      )}

      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
}
