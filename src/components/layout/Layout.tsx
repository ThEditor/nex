import * as React from 'react';

import Player from '@/components/layout/Player';
import Sidebar from '@/components/layout/sidebar/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='text-alt bg-dark flex h-screen flex-col'>
      <div className='flex h-[87%]'>
        <Sidebar className='w-[5%]' />
        <div className='h-full flex-grow overflow-y-scroll'>{children}</div>
      </div>
      <Player className='h-[13%]' />
    </div>
  );
}
