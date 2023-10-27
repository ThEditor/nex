'use client';
import { redirect } from 'next/navigation';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

export interface CarouselItemProps {
  title: string;
  subtitle: string;
  link: string;
  imgSrc: string;
  className?: string;
}

export default function CarouselItem({
  title,
  subtitle,
  link,
  imgSrc,
  className,
}: CarouselItemProps) {
  return (
    <div
      className={clsxm(
        className,
        'text-light font-quicksand hover:bg-light flex w-fit cursor-pointer select-none flex-col gap-1 rounded-3xl p-3 transition-all ease-linear hover:bg-opacity-10'
      )}
      onClick={() => redirect(link)}
    >
      <NextImage
        style={{ borderRadius: '20%' }}
        width={140}
        height={140}
        alt={title}
        src={imgSrc}
      />
      <div>{title}</div>
      <div className='opacity-50'>{subtitle}</div>
    </div>
  );
}
