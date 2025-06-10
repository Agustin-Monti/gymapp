'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AuthRedirectPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const type = searchParams.get('type');

    if (!token || !type) return;

    // Redirigir según el tipo
    if (type === 'email_confirmation') {
      window.location.href = `myapp://auth/confirm?token=${token}`;
    } else if (type === 'recovery') {
      window.location.href = `myapp://auth/reset?token=${token}`;
    }
  }, [searchParams]);

  const token = searchParams.get('token');
  const type = searchParams.get('type');

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Redirigiendo a la app...</h1>
      <p>Tipo: {type}</p>
      <p>Si no pasa nada automáticamente, copiá este token:</p>
      <code>{token}</code>
    </main>
  );
}
