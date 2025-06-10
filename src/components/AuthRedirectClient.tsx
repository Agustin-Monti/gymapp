'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AuthRedirectClient() {
  const searchParams = useSearchParams();

  const [token, setToken] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    const t = searchParams.get('token');
    const ty = searchParams.get('type');
    setToken(t);
    setType(ty);

    if (!t || !ty) return;

    if (ty === 'email_confirmation') {
      window.location.href = `myapp://auth/confirm?token=${t}`;
    } else if (ty === 'recovery') {
      window.location.href = `myapp://auth/reset?token=${t}`;
    }
  }, [searchParams]);

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Redirigiendo a la app...</h1>
      <p>Tipo: {type}</p>
      <p>Si no pasa nada automáticamente, copiá este token:</p>
      <code style={{ wordBreak: 'break-all' }}>{token}</code>
    </main>
  );
}
