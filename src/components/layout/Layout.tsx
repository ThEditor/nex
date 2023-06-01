import * as React from 'react';

import Player from '@/components/layout/Player';
import Sidebar from '@/components/layout/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen flex-col'>
      <div className='flex h-[90%]'>
        <Sidebar className='w-[15%]' />
        <div className='flex-grow outline outline-2 outline-blue-500'>
          {children}
        </div>
      </div>
      <Player className='h-[10%] outline outline-2 outline-red-500' />
    </div>
  );
}
