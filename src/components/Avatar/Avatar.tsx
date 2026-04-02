import { type ImgHTMLAttributes, useState } from 'react';
import { cn } from '../../utils/cn';
import styles from './Avatar.module.css';

export type AvatarSize = 'sm' | 'md' | 'lg';

function initialsFrom(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
  /** Texto para gerar iniciais quando não há imagem ou após erro de carregamento */
  name: string;
  size?: AvatarSize;
  src?: string;
  alt?: string;
}

const sizeClass: Record<AvatarSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function Avatar({ name, size = 'md', src, alt, className, onError, ...props }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;
  const label = alt ?? name;

  return (
    <span className={cn(styles.root, sizeClass[size], className)} role="img" aria-label={label}>
      {showImage ? (
        <img
          {...props}
          src={src}
          alt={alt ?? ''}
          className={styles.image}
          onError={(e) => {
            setFailed(true);
            onError?.(e);
          }}
        />
      ) : (
        <span className={styles.fallback} aria-hidden>
          {initialsFrom(name)}
        </span>
      )}
    </span>
  );
}
