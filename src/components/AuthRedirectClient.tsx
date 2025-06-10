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
      const deepLink = `myapp://auth/confirm?token=${t}&email=${encodeURIComponent(em)}`;
      console.log('🔗 Deep link generado:', deepLink); // 👈 esto imprime el enlace final
      window.location.href = deepLink;
    } else if (ty === 'recovery') {
      const deepLink = `myapp://auth/reset?token=${t}`;
      console.log('🔗 Deep link generado:', deepLink);
      window.location.href = deepLink;
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
