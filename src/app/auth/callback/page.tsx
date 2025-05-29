'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

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

      // Ya estás autenticado, redirigimos a la vista para cambiar la contraseña
      router.push('/change-password');
    };

    exchangeCode();
  }, [searchParams, router]);

  return <p>Autenticando, por favor espera...</p>;
}
