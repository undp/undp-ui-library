import { cva, type VariantProps } from 'class-variance-authority';
import { CircleCheckBig, CircleX, Info, TriangleAlert, X } from 'lucide-react';
import { Toast as ToastPrimitives } from 'radix-ui';
import React from 'react';

import { cn } from '@/lib/utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastContext = React.createContext<{
  variant: 'default' | 'success' | 'warning' | 'destructive' | 'info' | null | undefined;
} | null>(null);

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    {...props}
    ref={ref}
    className={cn(
      'fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-105',
      className,
    )}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'group pointer-events-auto relative shadow-xs bg-primary-white flex w-full text-content-primary items-center justify-between flex gap-2 overflow-hidden rounded-sm border border-stroke p-2 pr-6 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border border-stroke',
        success: 'border-t-4 border-success',
        warning: 'border-t-4 border-warning',
        info: 'border-t-4 border-info',
        destructive: 'border-t-4 border-error',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

const toastTitleVariants = cva('', {
  variants: {
    variant: {
      default: 'text-content-primary',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info',
      destructive: 'text-error',
    },
  },
  defaultVariants: { variant: 'default' },
});

const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastContext.Provider value={{ variant }}>
      <ToastPrimitives.Root
        {...props}
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
      />
    </ToastContext.Provider>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    {...props}
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-none bg-transparent px-3 font-medium text-content-primary text-sm transition-colors hover:bg-surface focus:outline-hidden focus:ring-1 disabled:pointer-events-none disabled:opacity-disabled',
      className,
    )}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    {...props}
    ref={ref}
    className={cn(
      'absolute top-1 right-1 rounded-md p-1 text-content-primary/50 opacity-0 transition-opacity hover:text-content-primary focus:opacity-100 focus:outline-hidden focus:ring-1 group-hover:opacity-100',
      className,
    )}
    toast-close=''
  >
    <X className='h-4 w-4' />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => {
  const context = React.useContext(ToastContext);

  const combinedClasses = cn(
    toastTitleVariants({ variant: context?.variant }),
    'text-lg font-bold [&+div]:text-xs',
    className,
  );
  let icon: React.ReactNode = null;
  switch (context?.variant) {
    case 'destructive':
      icon = <CircleX className='h-4 w-4 stroke-error' strokeWidth={2} />;
      break;
    case 'success':
      icon = <CircleCheckBig className='h-4 w-4 stroke-success' strokeWidth={2} />;
      break;
    case 'warning':
      icon = <TriangleAlert className='h-4 w-4 stroke-warning' strokeWidth={2} />;
      break;
    case 'info':
      icon = <Info className='h-4 w-4 stroke-info' strokeWidth={2} />;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div className='flex items-center gap-x-1'>
      {icon}
      <ToastPrimitives.Title {...props} ref={ref} className={combinedClasses} />
    </div>
  );
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    {...props}
    ref={ref}
    className={cn('text-base text-content-secondary opacity-90', className)}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  Toast,
  ToastAction,
  type ToastActionElement,
  ToastClose,
  ToastDescription,
  type ToastProps,
  ToastProvider,
  ToastTitle,
  ToastViewport,
};
