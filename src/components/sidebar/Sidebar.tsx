'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ImHome, ImSearch } from 'react-icons/im';
import { RiLoginBoxFill, RiLogoutBoxFill, RiUser3Fill } from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';
import SidebarGroup from '@/components/sidebar/SidebarGroup';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const router = useRouter();
  const signedIn = false;
  const pathname = usePathname();

  return (
    <div
      className={clsxm(
        className,
        'flex select-none flex-col items-center justify-start gap-8 pb-5 pt-5 text-white'
      )}
    >
      <NextImage
        className=''
        style={{
          borderRadius: '30%',
        }}
        width={40}
        height={40}
        alt='logo'
        useSkeleton
        src='/favicon/favicon.ico'
      />
      <SidebarGroup
        id='quick'
        active={pathname}
        items={[
          {
            id: '/',
            icon: ImHome,
            clickAction: () => {
              if (pathname !== '/') router.push('/');
            },
          },
          {
            id: '/search',
            icon: ImSearch,
            clickAction: () => {
              if (pathname !== '/search') router.push('/search');
            },
          },
        ]}
      />
      <SidebarGroup
        id='/account'
        active={pathname}
        items={[
          {
            id: '/account',
            icon: RiUser3Fill,
            clickAction: () => {
              if (pathname !== '/account') router.push('/account');
            },
          },
          {
            id: 'auth',
            icon: signedIn ? RiLogoutBoxFill : RiLoginBoxFill,
            clickAction: () => {
              if (!signedIn && pathname !== '/login') router.push('/login');
              if (signedIn) router.push('/logout');
            },
          },
        ]}
      />
    </div>
  );
}
