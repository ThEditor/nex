import CarouselItem, {
  CarouselItemProps,
} from '@/components/carousel/CarouselItem';

export interface CarouselProps {
  data: CarouselItemProps[];
}

export default function Carousel({ data }: CarouselProps) {
  return (
    <div>
      {data.map((v, i) => (
        <CarouselItem
          key={i}
          title={v.title}
          subtitle={v.subtitle}
          imgSrc={v.imgSrc}
          clickAction={v.clickAction}
        />
      ))}
    </div>
  );
}
