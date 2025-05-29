import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

function parseHash(hash: string) {
  return hash
    .substring(1)
    .split('&')
    .reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);
}

export default function ChangePassword() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      setError('Token de acceso no encontrado en la URL.');
      setLoading(false);
      return;
    }
    const tokens = parseHash(hash);

    if (!tokens.access_token || !tokens.refresh_token) {
      setError('Token inválido o incompleto.');
      setLoading(false);
      return;
    }

    supabase.auth
      .setSession({
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
      })
      .then(({ error }) => {
        if (error) {
          setError(error.message);
          setLoading(false);
          return;
        }
        setSession(true); // o podes guardar el user si querés
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Cambia tu contraseña</h1>
      {/* Aquí va tu formulario para cambiar la contraseña */}
    </div>
  );
}
