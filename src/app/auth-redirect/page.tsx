import dynamic from 'next/dynamic';

const AuthRedirectClient = dynamic(
  () => import('../../components/AuthRedirectClient'),
  { ssr: false }
);

export default function Page() {
  return <AuthRedirectClient />;
}
