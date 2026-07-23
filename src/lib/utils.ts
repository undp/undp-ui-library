import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-h1',
        'text-h1-sm',
        'text-h1-xs',
        'text-h2',
        'text-h2-sm',
        'text-h2-xs',
        'text-h3',
        'text-h3-sm',
        'text-h3-xs',
        'text-h4',
        'text-h4-sm',
        'text-h4-xs',
        'text-h5',
        'text-h5-sm',
        'text-h5-xs',
        'text-h6',
        'text-h6-sm',
        'text-h6-xs',
        'text-p',
        'text-p-sm',
        'text-p-xs',
        'text-2xl',
        'text-xl',
        'text-lg',
        'text-base',
        'text-sm',
        'text-xs',
        'text-2xs',
      ],
      'font-family': [
        'font-heading',
        'font-body',
        'font-sans',
        'font-mono',
        'font-serif',
        'font-sans-ar',
        'font-sans-az',
        'font-sans-bn',
        'font-sans-he',
        'font-sans-hi',
        'font-sans-ja',
        'font-sans-ka',
        'font-sans-km',
        'font-sans-ko',
        'font-sans-my',
        'font-sans-ne',
        'font-sans-zh',
      ],
      leading: [
        'leading-none',
        'leading-xs',
        'leading-sm',
        'leading-base',
        'leading-lg',
        'leading-xl',
        'leading-2xl',
        'leading-h1',
        'leading-h2',
        'leading-h3',
        'leading-h4',
        'leading-h5',
        'leading-h6',
        'leading-p',
      ],
    },
  },
});
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomId() {
  const id = Math.random().toString(36).substring(2, 10); // Base 36, first 8 characters
  return id;
}
