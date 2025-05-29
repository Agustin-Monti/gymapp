'use client';

import { useSearchParams } from 'next/navigation';
import ChangePasswordClient from '@/components/ChangePasswordClient';

export default function ChangePasswordClientWrapper() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  return <ChangePasswordClient code={code} />;
}
