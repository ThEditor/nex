import clsxm from '@/lib/clsxm';

export interface SliderProps {
  className?: string;
  disabled?: boolean;
}

export default function Slider({ disabled = false, className }: SliderProps) {
  return (
    <input
      id='customRange1'
      className={clsxm(
        className,
        'transparent accent-secondary-400 h-1 rounded-lg border-transparent'
      )}
      type='range'
      disabled={disabled}
    />
  );
}
