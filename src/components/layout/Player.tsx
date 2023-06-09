import {
  ImArrowLeft,
  ImArrowRight,
  ImLoop,
  ImPlay3,
  ImShuffle,
  ImVolumeHigh,
} from 'react-icons/im';

import clsxm from '@/lib/clsxm';

import IconButton from '@/components/buttons/IconButton';
import NextImage from '@/components/NextImage';
import Slider from '@/components/Slider';

interface PlayerProps {
  className?: string;
}

interface SongInfo {
  id: string;
  title: string;
  artist: string;
  imgSrc: string;
  duration: number;
}

export default function Player({ className }: PlayerProps) {
  const current: SongInfo = {
    id: 'test1',
    title: 'Life in a bubble',
    imgSrc: '/images/test.png',
    artist: 'The van',
    duration: 122_000,
  };
  return (
    <div
      className={clsxm(
        className,
        'bg-dark flex select-none items-center justify-between border-t-2 border-white border-opacity-10 bg-opacity-20 pl-20 pr-20 backdrop-blur-md'
      )}
      style={{
        boxShadow: '0px -10px 50px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <SongDetails className='min-w-[12rem]' song={current} />
      <PlaybackControls song={current} />
      <VolumeControl song={current} />
    </div>
  );
}

function SongDetails({
  song,
  className,
}: {
  song?: SongInfo;
  className?: string;
}) {
  if (!song) return <div className={clsxm(className)}></div>;
  return (
    <div className={clsxm(className, 'font-quicksand flex gap-2')}>
      <NextImage
        style={{ borderRadius: '20%' }}
        alt={song.id}
        src={song.imgSrc}
        width={60}
        height={60}
      />
      <div className='flex flex-col justify-center'>
        <div className='text-light font-bold'>{song.title}</div>
        <div className='text-light opacity-60'>{song.artist}</div>
      </div>
    </div>
  );
}

function PlaybackControls({
  song,
  className,
}: {
  song?: SongInfo;
  className?: string;
}) {
  const disabled = song ? false : true;
  return (
    <div className={clsxm(className, 'flex flex-col items-center gap-2')}>
      <div className='flex justify-center gap-4'>
        <IconButton variant='secondary' icon={ImShuffle} disabled={disabled} />
        <IconButton
          variant='secondary'
          icon={ImArrowLeft}
          disabled={disabled}
        />
        <IconButton
          className='bg-secondary-500 rounded-3xl text-white drop-shadow-2xl'
          variant='secondary'
          icon={ImPlay3}
          disabled={disabled}
        />
        <IconButton
          variant='secondary'
          icon={ImArrowRight}
          disabled={disabled}
        />
        <IconButton variant='secondary' icon={ImLoop} disabled={disabled} />
      </div>
      <div className='flex w-[50rem] justify-center'>
        <Slider className='w-full' disabled={disabled} />
      </div>
    </div>
  );
}

function VolumeControl({
  song,
  className,
}: {
  song?: SongInfo;
  className?: string;
}) {
  const disabled = song ? false : true;
  return (
    <div className={clsxm(className, 'flex items-center justify-center')}>
      <IconButton variant='secondary' icon={ImVolumeHigh} disabled={disabled} />
      <Slider disabled={disabled} />
    </div>
  );
}
