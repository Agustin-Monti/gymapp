'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Props {
  code: string | null;
}

export default function ChangePasswordClient({ code }: Props) {
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const verifyRecoveryCode = async () => {
      if (!code) {
        setMessage('❌ Código no encontrado en la URL.');
        return;
      }

      const { data, error } = await supabase.auth.verifyOtp({
        type: 'recovery',
        token: code,
      });

      console.log('🔍 verifyOtp result:', { data, error });

      if (error) {
        setMessage('❌ Enlace inválido o expirado. Intenta nuevamente desde la app.');
      } else {
        setIsVerified(true);
      }
    };

    verifyRecoveryCode();
  }, [code]);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage(`❌ Error al cambiar la contraseña: ${error.message}`);
    } else {
      setMessage('✅ Contraseña actualizada con éxito. Ya puedes iniciar sesión en la app.');
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 32, maxWidth: 400, margin: '0 auto' }}>
      <h2>Cambiar Contraseña</h2>

      {!isVerified ? (
        <p>🔄 Validando enlace...</p>
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
