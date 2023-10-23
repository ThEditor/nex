import { Metadata } from 'next';
import * as React from 'react';

import '../styles/globals.css';

import Player from '../components/layout/Player';
import Sidebar from '../components/layout/sidebar/Sidebar';

export const metadata: Metadata = {
  title: {
    default: 'Nex | Music Player',
    template: '%s | Nex',
  },
  applicationName: 'Nex | Music Player',
  description: 'A spotify inspired music players for communities and groups',
  authors: {name: "ThEditor", url: 'https://nex.theditor.xyz'},
  robots: 'follow, index',
  icons: {icon:'https://theditor.xyz/assets/img/profile-img.jpg'},
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
