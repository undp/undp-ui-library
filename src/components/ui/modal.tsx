import React from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface ModalProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  className?: string;
  showCloseButton?: boolean;
  titleClassName?: string;
  footerClassName?: string;
  descriptionClassName?: string;
}

function Modal(props: ModalProps) {
  const {
    title,
    description,
    children,
    footer,
    open,
    onClose,
    className,
    titleClassName,
    footerClassName,
    descriptionClassName,
    showCloseButton = true,
  } = props;
  const descriptionId = React.useId();
  const titleId = React.useId();
  return (
    <Dialog
      open={open}
      onOpenChange={state => {
        if (!state) onClose?.();
      }}
    >
      <DialogContent
        className={cn(
          'rounded-none p-16 max-w-screen-xl undp-scrollbar',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]',
          className,
        )}
        onOpenChange={state => {
          if (!state) onClose?.();
        }}
        aria-describedby={description ? descriptionId : undefined}
        aria-labelledby={title ? titleId : undefined}
      >
        {showCloseButton && (
          <button
            type='button'
            onClick={() => {
              onClose?.();
            }}
            className='absolute right-6 top-6 p-2 bg-primary-gray-200 dark:bg-primary-gray-600 rounded-full ring-offset-background transition-opacity hover:bg-primary-gray-300 hover:dark:bg-primary-gray-500 disabled:pointer-events-none data-[state=open]:bg-primary-gray-200 dark:data-[state=open]:bg-primary-gray-600 data-[state=open]:text-primary-gray-600'
          >
            <X className='h-6 w-6 stroke-primary-black dark:stroke-primary-gray-100' />
          </button>
        )}

        {(title || description) && (
          <DialogHeader>
            {title && (
              <DialogTitle id={titleId} className={titleClassName}>
                {title}
              </DialogTitle>
            )}
            {description && (
              <DialogDescription
                className={descriptionClassName}
                id={descriptionId}
              >
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}

        {children}

        {footer && (
          <DialogFooter className={footerClassName}>{footer}</DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

export { Modal };
