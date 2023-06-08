import * as React from 'react';

import Player from '@/components/layout/Player';
import Sidebar from '@/components/layout/sidebar/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='text-alt flex h-screen bg-[#1D2123]'>
      <Sidebar className='w-[5%]' />
      <div className='flex flex-grow flex-col'>
        <div className='flex-grow outline outline-2 outline-blue-500'>
          {children}
        </div>
        <Player className='h-[10%] outline outline-2 outline-red-500' />
      </div>
    </div>
  );
}
