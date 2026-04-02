import * as SliderPrimitive from '@radix-ui/react-slider';
import { type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './Slider.module.css';

export interface SliderProps extends ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  className?: string;
}

export function Slider({ className, min = 0, max = 100, step = 1, ...props }: SliderProps) {
  return (
    <SliderPrimitive.Root
      className={cn(styles.root, className)}
      min={min}
      max={max}
      step={step}
      {...props}
    >
      <SliderPrimitive.Track className={styles.track}>
        <SliderPrimitive.Range className={styles.range} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={styles.thumb} aria-label="Valor" />
    </SliderPrimitive.Root>
  );
}
