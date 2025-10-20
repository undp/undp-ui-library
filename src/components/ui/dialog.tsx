import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    {...props}
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 backdrop-blur-[18px] bg-[#f7f7f7]/[.9] dark:bg-[#55606E]/[.9] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    onOpenChange?: (open: boolean) => void;
    inPortal?: boolean;
    overlayClassName?: string;
  }
>(({ className, children, onOpenChange, inPortal = false, overlayClassName, ...props }, ref) => {
  const content = (
    <>
      <DialogOverlay onClick={() => onOpenChange?.(false)} className={overlayClassName} />
      <DialogPrimitive.Content
        {...props}
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg max-h-[90vh] overflow-auto translate-x-[-50%] translate-y-[-50%] gap-4 border border-primary-gray-200 bg-primary-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
          className,
        )}
      >
        {children}
      </DialogPrimitive.Content>
    </>
  );
  if (inPortal) {
    return <DialogPortal data-slot='drawer-portal'>{content}</DialogPortal>;
  }
  return content;
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn('flex flex-col gap-1.5 text-center sm:text-left', className)} />
  );
}
DialogHeader.displayName = 'DialogHeader';

function DialogFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
}
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    {...props}
    ref={ref}
    className={cn(
      'mb-0 p-0 text-[1.563rem] md:text-[2.188rem] font-normal leading-[1.15] text-primary-black dark:text-primary-white',
      className,
    )}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    {...props}
    ref={ref}
    className={cn('text-sm text-primary-gray-600 dark:text-primary-gray-300 m-0', className)}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
