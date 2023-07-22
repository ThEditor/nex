import { useRouter } from 'next/router';
import { ImHome, ImSearch } from 'react-icons/im';
import { RiLoginBoxFill, RiLogoutBoxFill, RiUser3Fill } from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

import SidebarGroup from '@/components/layout/sidebar/SidebarGroup';
import NextImage from '@/components/NextImage';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const router = useRouter();
  const signedIn = false;

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
        active={router.asPath}
        items={[
          {
            id: '/',
            icon: ImHome,
            clickAction: () => {
              if (router.asPath !== '/') router.push('/');
            },
          },
          {
            id: '/search',
            icon: ImSearch,
            clickAction: () => {
              if (router.asPath !== '/search') router.push('/search');
            },
          },
        ]}
      />
      <SidebarGroup
        id='/account'
        active={router.asPath}
        items={[
          {
            id: '/account',
            icon: RiUser3Fill,
            clickAction: () => {
              if (router.asPath !== '/account') router.push('/account');
            },
          },
          {
            id: 'auth',
            icon: signedIn ? RiLogoutBoxFill : RiLoginBoxFill,
            clickAction: () => {
              if (!signedIn && router.asPath !== '/login')
                router.push('/login');
              if (signedIn) router.push('/logout');
            },
          },
        ]}
      />
    </div>
  );
}
