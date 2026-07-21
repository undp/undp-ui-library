import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';
import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

function Modal(props: {
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
  overlayClassName?: string;
  closeButtonClassName?: string;
  inPortal?: boolean;
}) {
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
    overlayClassName,
    closeButtonClassName,
    showCloseButton = true,
    inPortal = false,
  } = props;
  const descriptionId = React.useId();
  const titleId = React.useId();
  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        if (!state) onClose?.();
      }}
    >
      <DialogContent
        inPortal={inPortal}
        className={cn(
          'undp-scrollbar max-w-(--breakpoint-xl) p-16',
          'data-[state=closed]:animate-out data-[state=open]:animate-in',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]',
          className,
        )}
        overlayClassName={overlayClassName}
        onOpenChange={(state) => {
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
            className={cn(
              'absolute top-6 right-6 rounded-full border border-stroke bg-surface p-2 ring-offset-background transition-opacity hover:bg-surface-hover disabled:pointer-events-none data-[state=open]:bg-surface data-[state=open]:text-content-primary',
              closeButtonClassName,
            )}
          >
            <X className='h-6 w-6' />
          </button>
        )}

        {title || description ? (
          <DialogHeader>
            {title && (
              <DialogTitle id={titleId} className={titleClassName}>
                {title}
              </DialogTitle>
            )}
            {description && (
              <DialogDescription className={descriptionClassName} id={descriptionId}>
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        ) : (
          <VisuallyHidden>
            <DialogTitle>This a modal</DialogTitle>
          </VisuallyHidden>
        )}

        {children}

        {footer && <DialogFooter className={footerClassName}>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}

export { Modal };
