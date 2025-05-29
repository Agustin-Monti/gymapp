'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AuthCallbackClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const exchangeCode = async () => {
      const code = searchParams.get('code');

      if (!code) {
        console.error('Código no encontrado en la URL');
        return;
      }

      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error('Error al intercambiar el código:', error.message);
        alert('Error: ' + error.message);
        return;
      }

      router.push('/change-password');
    };

    exchangeCode();
  }, [searchParams, router]);

  return <p>Autenticando sesión, por favor espera...</p>;
}
