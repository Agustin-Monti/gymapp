import { Suspense } from 'react';
import AuthCallbackClient from './AuthCallbackClient';

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <AuthCallbackClient />
    </Suspense>
  );
}
