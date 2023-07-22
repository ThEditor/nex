import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function LoginPage() {
  const router = useRouter();
  const signedin = false;

  useEffect(() => {
    if (signedin) router.push('/');
  }, [router, signedin]);

  if (signedin) {
    router.push('/');
    return <></>;
  }

  return !signedin ? (
    <div className='flex h-full items-center justify-center'>
      <form
        className='bg-dark-alt flex w-1/3 flex-col gap-6 rounded-xl p-14'
        style={{
          boxShadow: '0px -10px 50px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h3>Sign In</h3>
        <label>Email</label>
        <input
          className='rounded-xl'
          name='email'
          type='email'
          placeholder='name@example.com'
        ></input>
        <label>Password</label>
        <input
          className='rounded-xl'
          name='password'
          type='password'
          placeholder='password'
        ></input>
        <Button className='bg-secondary-600 justify-center' type='submit'>
          Login
        </Button>
        <label>
          or{' '}
          <UnderlineLink className='text-secondary-500' href='/register'>
            register here
          </UnderlineLink>
        </label>
      </form>
    </div>
  ) : (
    <></>
  );
}
