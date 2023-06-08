import clsxm from '@/lib/clsxm';

interface PlayerProps {
  className?: string;
}

export default function Player({ className }: PlayerProps) {
  return <div className={clsxm(className)}></div>;
}
