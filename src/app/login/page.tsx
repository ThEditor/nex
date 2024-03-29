import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  const signedin = false;
  if (signedin) {
    redirect('/');
  }

  return !signedin ? (
    <div className='flex h-full items-center justify-center'>
      <form
        className='bg-dark-alt flex w-1/3 flex-col gap-6 rounded-xl p-14'
        style={{
          boxShadow: '0px -10px 50px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h3 className='text-light'>Sign In</h3>
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
