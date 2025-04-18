import React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { CircleCheckBig, CircleX, TriangleAlert, X } from 'lucide-react';

import { cn } from '@/lib/utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastContext = React.createContext<{
  variant: 'default' | 'success' | 'warning' | 'destructive' | null | undefined;
} | null>(null);

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    {...props}
    ref={ref}
    className={cn(
      'fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'group pointer-events-auto relative shadow-xs bg-primary-white dark:bg-primary-gray-650 flex w-full text-primary-black dark:text-primary-white items-center justify-between flex gap-2 overflow-hidden rounded-sm border border-primary-gray-400 p-2 pr-6 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border border-primary-gray-400 dark:border-0',
        success:
          'border-t-4 border-accent-dark-green dark:border-b-0 dark:border-l-0 dark:border-r-0',
        warning:
          'border-t-4 border-accent-dark-yellow dark:border-b-0 dark:border-l-0 dark:border-r-0',
        destructive:
          'border-t-4 border-accent-dark-red dark:border-b-0 dark:border-l-0 dark:border-r-0',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

const toastTitleVariants = cva('', {
  variants: {
    variant: {
      default: 'text-primary-black dark:text-primary-white',
      success: 'text-accent-dark-green',
      warning: 'text-accent-dark-yellow',
      destructive: 'text-accent-dark-red',
    },
  },
  defaultVariants: { variant: 'default' },
});

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
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
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    {...props}
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center text-primary-gray-700 dark:text-primary-gray-100 justify-center rounded-none bg-transparent px-3 text-sm font-medium transition-colors hover:bg-primary-gray-200 dark:hover:bg-primary-gray-600 focus:outline-hidden focus:ring-1 disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    {...props}
    ref={ref}
    className={cn(
      'absolute right-1 top-1 rounded-md p-1 text-primary-gray-700/50 dark:text-primary-gray-100/50 opacity-0 transition-opacity hover:text-primary-gray-700 dark:hover:text-primary-gray-100 focus:opacity-100 focus:outline-hidden focus:ring-1 group-hover:opacity-100',
      className,
    )}
    toast-close=''
  >
    <X className='h-4 w-4' />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
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
      icon = (
        <CircleX className='h-4 w-4 stroke-accent-dark-red' strokeWidth={2} />
      );
      break;
    case 'success':
      icon = (
        <CircleCheckBig
          className='h-4 w-4 stroke-accent-dark-green'
          strokeWidth={2}
        />
      );
      break;
    case 'warning':
      icon = (
        <TriangleAlert
          className='h-4 w-4 stroke-accent-dark-yellow'
          strokeWidth={2}
        />
      );
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div className='flex gap-x-1 items-center'>
      {icon}
      <ToastPrimitives.Title {...props} ref={ref} className={combinedClasses} />
    </div>
  );
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    {...props}
    ref={ref}
    className={cn('text-base opacity-90 dark:text-primary-white', className)}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
