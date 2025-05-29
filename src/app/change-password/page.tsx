// src/app/change-password/page.tsx

import React from 'react';


import ChangePasswordClientWrapper from './ChangePasswordClientWrapper';

export default function ChangePasswordPage() {
  return (
    <React.Suspense fallback={<p>Cargando...</p>}>
      <ChangePasswordClientWrapper />
    </React.Suspense>
  );
}
