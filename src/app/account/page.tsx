import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account',
};

export default function AccountPage() {
  return (
    <>
      <main className='flex items-center justify-center'>
        <h1>Account Settings Here</h1>
      </main>
    </>
  );
}
