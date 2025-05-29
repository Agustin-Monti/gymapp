// src/app/change-password/ChangePasswordClientWrapper.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import ChangePasswordClient from '@/components/ChangePasswordClient';

export default function ChangePasswordClientWrapper() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const email = searchParams.get('email');

  return <ChangePasswordClient code={code} email={email} />;
}
