
import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

export interface CarouselItemProps {
  title: string;
  subtitle: string;
  clickAction: () => void;
  imgSrc: string;
  className?: string;
}

export default function CarouselItem({
  title,
  subtitle,
  clickAction,
  imgSrc,
  className,
}: CarouselItemProps) {
  return (
    <div
      className={clsxm(
        className,
        'text-light font-quicksand hover:bg-light flex w-fit cursor-pointer select-none flex-col gap-1 rounded-3xl p-3 transition-all ease-linear hover:bg-opacity-10'
      )}
      onClick={() => clickAction()}
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
