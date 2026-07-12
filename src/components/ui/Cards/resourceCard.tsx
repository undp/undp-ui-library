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
      'group w-full flex flex-col gap-0 bg-primary-gray-200 dark:bg-primary-gray-600 box-border items-stretch transition-all duration-400',
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
        `relative box-border w-full px-12 py-9 bg-[linear-gradient(180deg,_#c9d0d6_70%,_#c9d0d6_0,_#414648_70.5%,_#9ea5ac_0,_#9ea5ac)]
     before:pointer-events-none
     before:absolute
     before:content-['']
     before:bottom-[37px]
     before:left-8
     before:h-[27px]
     before:w-[calc(100%-100px)]
     before:rounded-[21%]
     before:bg-primary-gray-600
     dark:before:bg-primary-gray-300
     before:blur-[4px]
     before:[transform:skewX(64deg)]`,
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
        <div className='h-full w-full absolute z-[1] top-0 left-0 bg-[linear-gradient(27.66deg,#FFEB00,transparent_70.49%)] opacity-0 group-hover:opacity-75' />
      ) : null}
    </div>
  ),
);
ResourceCardImage.displayName = 'ResourceCardImage';

const ResourceCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 grow flex flex-col', className)} {...props} />
  ),
);
ResourceCardContent.displayName = 'ResourceCardContent';

const ResourceCardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mb-1 leading-[1.15] flex gap-2 font-normal font-sans text-[1.25rem]',
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
    className={cn(`mb-4 text-[1rem] font-sans font-normal leading-[1.4]`, className)}
    {...props}
  />
));
ResourceCardDescription.displayName = 'ResourceCardDescription';

const ResourceCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('font-sans', className)} {...props} />
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
