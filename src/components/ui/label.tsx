import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariant = cva(
  '!text-sm m-0 p-0 block text-primary-gray-700 dark:text-primary-white peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      language: {
        en: 'font-sans',
        ar: 'font-sans-ar',
        he: 'font-sans-he',
      },
    },
    defaultVariants: {
      language: 'en',
    },
  },
);
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    language?: 'en' | 'ar' | 'he';
  }
>(({ className, language, ...props }, ref) => (
  <LabelPrimitive.Root
    {...props}
    ref={ref}
    className={cn(headingVariant({ language }), className)}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
