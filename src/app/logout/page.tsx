import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Logout',
};

export default function LogoutPage() {
  const signedin = true;

  return signedin ? redirect('/') : <></>;
}
