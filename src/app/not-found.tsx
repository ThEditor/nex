import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import ArrowLink from '@/components/links/ArrowLink';

export default function NotFoundPage() {
  return (
    <div className='h-full'>
      <main className='h-full'>
        <section className='h-full bg-white'>
          <div className='layout flex h-full flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </div>
  );
}
