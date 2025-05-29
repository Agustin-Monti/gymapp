import ChangePasswordClient from '@/components/ChangePasswordClient';

export default function ChangePasswordPage({
  searchParams,
}: {
  searchParams: { code?: string };
}) {
  const code = searchParams.code || null;

  return <ChangePasswordClient code={code} />;
}
