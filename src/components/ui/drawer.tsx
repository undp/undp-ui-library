import { X } from 'lucide-react';
import type * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/lib/utils';

function Drawer({ direction, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return (
    <DrawerPrimitive.Root
      data-slot='drawer'
      modal={true}
      direction={direction || 'right'}
      snapPoints={[]}
      closeThreshold={1}
      {...props}
    />
  );
}

function DrawerTrigger({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot='drawer-trigger' {...props} />;
}

function DrawerPortal({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot='drawer-portal' {...props} />;
}

function DrawerClose({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot='drawer-close' {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot='drawer-overlay'
      className={cn(
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-[30px] data-[state=closed]:animate-out data-[state=open]:animate-in',
        className,
      )}
      {...props}
    />
  );
}

type DrawerContentProps = React.ComponentProps<typeof DrawerPrimitive.Content> & {
  inPortal?: boolean;
  overlayClassName?: string;
  closeButtonClassName?: string;
};

function DrawerContent({
  className,
  children,
  inPortal = false,
  overlayClassName,
  closeButtonClassName,
  ...props
}: DrawerContentProps) {
  const content = (
    <>
      <DrawerOverlay className={overlayClassName} />
      <DrawerPrimitive.Content
        data-slot='drawer-content'
        className={cn(
          'group/drawer-content fixed z-50 flex h-auto flex-col bg-background px-[6px] sm:px-3',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh]',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh]',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-[95%] sm:data-[vaul-drawer-direction=right]:w-[83.33%]',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-[95%] sm:data-[vaul-drawer-direction=right]:w-[83.33%]',
          className,
        )}
        {...props}
      >
        <DrawerClose asChild>
          <button
            className={cn(
              'fixed top-4 rounded-full border border-stroke bg-surface p-2 text-content-primary transition-all hover:bg-surface-hover',
              'group-data-[vaul-drawer-direction=right]/drawer-content:right-0 group-data-[vaul-drawer-direction=right]/drawer-content:mr-4 sm:group-data-[vaul-drawer-direction=right]/drawer-content:right-[100%] sm:group-data-[vaul-drawer-direction=right]/drawer-content:mr-[8.33%]',
              'group-data-[vaul-drawer-direction=left]/drawer-content:left-0 group-data-[vaul-drawer-direction=left]/drawer-content:ml-4 sm:group-data-[vaul-drawer-direction=left]/drawer-content:left-[100%] sm:group-data-[vaul-drawer-direction=left]/drawer-content:ml-[8.33%]',
              'group-data-[vaul-drawer-direction=top]/drawer-content:hidden',
              'group-data-[vaul-drawer-direction=bottom]/drawer-content:hidden',
              closeButtonClassName,
            )}
            type='button'
          >
            <X size={32} strokeWidth={1} />
          </button>
        </DrawerClose>
        <div
          style={{
            userSelect: 'text',
            touchAction: 'auto',
          }}
          className='undp-scrollbar h-screen bg-background px-[0.75rem] pt-[4.375rem] md:pt-0 md:pr-[1.5rem] md:pl-[2rem]'
        >
          {children}
        </div>
      </DrawerPrimitive.Content>
    </>
  );
  if (inPortal) {
    return <DrawerPortal data-slot='drawer-portal'>{content}</DrawerPortal>;
  }
  return content;
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='drawer-header'
      className={cn(
        'mt-0 mr-0 ml-[1.875rem] group-data-[vaul-drawer-direction=bottom]:mt-24 group-data-[vaul-drawer-direction=left]:mt-24 group-data-[vaul-drawer-direction=left]:mt-24 group-data-[vaul-drawer-direction=right]:mt-24 group-data-[vaul-drawer-direction=top]:mt-24 group-data-[vaul-drawer-direction=right]:mr-24 group-data-[vaul-drawer-direction=bottom]:ml-24 group-data-[vaul-drawer-direction=top]:ml-24 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:mt-[6rem] md:ml-[6rem] md:gap-1.5 md:text-left',
        className,
      )}
      {...props}
    />
  );
}

function DrawerBody({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot='drawer-body' className={cn('mt-20 sm:mt-10', className)} {...props} />;
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='drawer-footer'
      className={cn('absolute bottom-0 mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  );
}

function DrawerTitle({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot='drawer-title'
      {...props}
      className={cn(
        'mb-4 font-bold font-heading text-h2-xs uppercase md:text-h2-sm lg:text-h2',
        props.className,
      )}
    />
  );
}

function DrawerDescription({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot='drawer-description'
      {...props}
      className={cn('mb-4 font-semibold text-h4-xs md:text-h4-sm lg:text-h4', props.className)}
    />
  );
}

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
