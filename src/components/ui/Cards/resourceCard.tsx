import { cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const ResourceCard = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      'group box-border flex w-full flex-col items-stretch gap-0 bg-surface transition-all duration-400',
      className,
    )}
    {...props}
  />
));
ResourceCard.displayName = 'ResourceCard';

interface ResourceCardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  hoverColor?: boolean;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  imageClassNames?: string;
}
const imgVariants = cva('relative w-full object-cover object-center opacity-100', {
  variants: {
    aspectRatio: {
      landscape: 'aspect-video',
      portrait: 'aspect-[3/4]',
      square: 'aspect-square',
    },
  },
  defaultVariants: {
    aspectRatio: 'portrait',
  },
});

const ResourceCardImage = React.forwardRef<HTMLDivElement, ResourceCardImageProps>(
  (
    { className, imageSrc, aspectRatio = 'portrait', hoverColor = true, imageClassNames, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        `relative box-border w-full bg-[linear-gradient(180deg,_#c9d0d6_70%,_#c9d0d6_0,_#414648_70.5%,_#9ea5ac_0,_#9ea5ac)] px-12 py-9 before:pointer-events-none before:absolute before:bottom-[37px] before:left-8 before:h-[27px] before:w-[calc(100%-100px)] before:rounded-[21%] before:bg-surface-xl before:blur-[4px] before:content-[''] before:[transform:skewX(64deg)]`,
        className,
      )}
      {...props}
    >
      <img
        src={imageSrc}
        alt='resource cover'
        className={cn(imgVariants({ aspectRatio }), imageClassNames)}
      />
      {hoverColor ? (
        <div className='absolute top-0 left-0 z-[1] h-full w-full bg-[linear-gradient(27.66deg,#FFEB00,transparent_70.49%)] opacity-0 group-hover:opacity-75' />
      ) : null}
    </div>
  ),
);
ResourceCardImage.displayName = 'ResourceCardImage';

const ResourceCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex grow flex-col p-6', className)} {...props} />
  ),
);
ResourceCardContent.displayName = 'ResourceCardContent';

const ResourceCardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mb-1 flex gap-2 font-body font-normal text-p-xs md:text-p-sm lg:text-p',
        className,
      )}
      {...props}
    />
  ),
);
ResourceCardTitle.displayName = 'ResourceCardTitle';

const ResourceCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mb-4 font-body font-normal text-sm md:text-base lg:text-base', className)}
    {...props}
  />
));
ResourceCardDescription.displayName = 'ResourceCardDescription';

const ResourceCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('font-body', className)} {...props} />
  ),
);
ResourceCardFooter.displayName = 'ResourceCardFooter';

export {
  ResourceCard,
  ResourceCardContent,
  ResourceCardDescription,
  ResourceCardFooter,
  ResourceCardImage,
  ResourceCardTitle,
};
