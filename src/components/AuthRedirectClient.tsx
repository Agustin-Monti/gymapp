'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AuthRedirectClient() {
  const searchParams = useSearchParams();

  const [token, setToken] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const t = searchParams.get('token');
    const ty = searchParams.get('type');
    const em = searchParams.get('email'); // 👈 nuevo

    setToken(t);
    setType(ty);
    setEmail(em);

    if (!t || !ty) return;

    if (ty === 'email_confirmation' && em) {
      const url = `myapp://auth/confirm?token=${t}&email=${encodeURIComponent(em)}`;
      window.location.href = url;
    } else if (ty === 'recovery') {
      const url = `myapp://auth/reset?token=${t}`;
      window.location.href = url;
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
