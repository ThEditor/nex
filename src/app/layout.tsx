import * as React from 'react';

import '../styles/globals.css';

import Player from '../components/layout/Player';
import Sidebar from '../components/layout/sidebar/Sidebar';

export const metadata = {
  title: {
    default: 'Nex | Music Player',
    template: '%s',
  },
  siteName: 'Nex | Music Player',
  description: 'A spotify inspired music players for communities and groups',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://nex.theditor.xyz',
  type: 'website',
  robots: 'follow, index',
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: 'https://theditor.xyz/assets/img/profile-img.jpg',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className='text-alt bg-dark flex h-screen flex-col'>
          <div className='flex h-[87%]'>
            <Sidebar className='w-[5%]' />
            <div className='h-full flex-grow overflow-y-auto'>{children}</div>
          </div>
          <Player className='h-[13%]' />
        </div>
      </body>
    </html>
  );
}
