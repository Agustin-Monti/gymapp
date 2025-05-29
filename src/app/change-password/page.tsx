import ChangePasswordClient from '@/components/ChangePasswordClient';


interface Props {
  searchParams: { code?: string };
}

export default function ChangePasswordPage({ searchParams }: Props) {
  const code = searchParams.code || null;

  return <ChangePasswordClient code={code} />;
}
