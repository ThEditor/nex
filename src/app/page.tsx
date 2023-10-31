'use client';
import * as React from 'react';

import Carousel, { CarouselProps } from '@/components/carousel/Carousel';

interface CarouselSection extends CarouselProps {
  name: string;
}

export default function HomePage() {
  const lists: CarouselSection[] = [
    {
      name: 'Liked Songs',
      data: [
        {
          title: 'Life in a bubble',
          subtitle: 'The van',
          link: '/',
          imgSrc: '/images/test.png',
        },
        {
          title: 'Life in a bubble',
          subtitle: 'The van',
          link: '/',
          imgSrc: '/images/test.png',
        },
      ],
    },
    {
      name: 'New Releases',
      data: [
        {
          title: 'Life in a bubble',
          subtitle: 'The van',
          link: '/',
          imgSrc: '/images/test.png',
        },
        {
          title: 'Life in a bubble',
          subtitle: 'The van',
          link: '/',
          imgSrc: '/images/test.png',
        },
      ],
    },
  ];
  return (
    <div>
      <ul className='m-8 flex flex-col gap-4'>
        {lists.map((v, i) => (
          <li className='flex flex-col gap-4' key={i}>
            <div className='font-quicksand text-light select-none text-2xl font-bold'>
              {v.name}
            </div>
            <Carousel data={v.data} />
          </li>
        ))}
      </ul>
    </div>
  );
}
