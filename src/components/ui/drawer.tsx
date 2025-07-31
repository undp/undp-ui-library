import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

function Drawer({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot='drawer' direction='right' {...props} />;
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
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-[30px]',
        className,
      )}
      {...props}
    />
  );
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot='drawer-portal'>
      <DrawerOverlay />

      <DrawerPrimitive.Content
        data-slot='drawer-content'
        className={cn(
          'group/drawer-content bg-primary-white dark:bg-primary-black fixed z-50 flex h-auto flex-col pl-8 pr-6',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh]',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh]',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-[83.33%]',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-[83.33%]',
          className,
        )}
        {...props}
      >
        <DrawerClose asChild>
          <button
            className={cn(
              'fixed top-4 p-2 rounded-full bg-primary-gray-200 dark:bg-primary-gray-650 transition-all',
              'group-data-[vaul-drawer-direction=right]/drawer-content:mr-[8.33%] group-data-[vaul-drawer-direction=right]/drawer-content:right-[100%]',
              'group-data-[vaul-drawer-direction=left]/drawer-content:ml-[8.33%] group-data-[vaul-drawer-direction=left]/drawer-content:left-[100%]',
              'group-data-[vaul-drawer-direction=top]/drawer-content:hidden',
              'group-data-[vaul-drawer-direction=bottom]/drawer-content:hidden',
            )}
          >
            <X size={32} strokeWidth={1} />
          </button>
        </DrawerClose>
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='drawer-header'
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=left]:mt-24 group-data-[vaul-drawer-direction=right]:mt-24 group-data-[vaul-drawer-direction=right]:mr-24 group-data-[vaul-drawer-direction=top]:mt-24 group-data-[vaul-drawer-direction=bottom]:mt-24 group-data-[vaul-drawer-direction=top]:ml-24 group-data-[vaul-drawer-direction=bottom]:ml-24 group-data-[vaul-drawer-direction=left]:mt-24 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left h-[100vh] undp-scrollbar',
        className,
      )}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='drawer-footer'
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  );
}

function DrawerTitle({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return <DrawerPrimitive.Title data-slot='drawer-title' {...props} />;
}

function DrawerDescription({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return <DrawerPrimitive.Description data-slot='drawer-description' {...props} />;
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
