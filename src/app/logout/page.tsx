'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LogoutPage() {
  const router = useRouter();
  const signedin = true;

  useEffect(() => {
    if (signedin) {
      // todo: request logout
    }

    router.push('/login');
  }, [router, signedin]);

  return signedin ? (
    <div className='text-light flex h-full items-center justify-center'>
      <h1>Logging you out...</h1>
    </div>
  ) : (
    <></>
  );
}
