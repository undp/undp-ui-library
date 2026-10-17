import { Trash2, Upload } from 'lucide-react';
import type React from 'react';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn, generateRandomId } from '@/lib/utils';
import { Badge } from './badge';
import { Label } from './label';
import { P } from './typography';

type FileUploadProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'defaultValue'
> & {
  onFileChange?: (_d: File[]) => void;
  defaultFiles?: File[];
  value?: File[];
};

function FileUpload({ onFileChange, children, defaultFiles, value, ...props }: FileUploadProps) {
  const idForHtml = props.id || generateRandomId();
  const inputRef = useRef<HTMLInputElement>(null);

  const [internalFiles, setInternalFiles] = useState<File[]>(defaultFiles || []);
  const isControlled = value !== undefined;
  const files = isControlled ? value : internalFiles;

  const updateFiles = (next: File[]) => {
    if (!isControlled) setInternalFiles(next);
    onFileChange?.(next);
    // reset the native input so picking the same file again still fires onChange
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const picked = Array.from(event.target.files);
    updateFiles(props.multiple ? [...files, ...picked] : picked);
  };

  const handleRemoveFile = (file: File) => updateFiles(files.filter((f) => f !== file));

  return (
    <>
      <div className={cn('mb-2.5 flex w-full flex-col items-center gap-4', props.className)}>
        <input
          {...props}
          ref={inputRef}
          id={idForHtml}
          type='file'
          className='hidden'
          onChange={handleFileChange}
        />

        {/* Custom Upload Button */}
        <label htmlFor={idForHtml} className='flex w-full'>
          {children || (
            <div className='flex w-full cursor-pointer flex-col items-center gap-2 rounded-base bg-surface px-4 py-6 text-content-primary hover:bg-surface-hover'>
              <Upload className='h-7 w-7' strokeWidth={1} />
              <P className='text-content-primary' size='sm' marginBottom='none'>
                Click on this area to upload
              </P>
            </div>
          )}
        </label>
      </div>
      {files.length > 0 ? (
        <>
          <Label>File(s) uploaded</Label>
          <div className='justify-left mt-1 flex w-full flex-wrap gap-2.5'>
            {files?.map((file) => (
              <Badge
                key={`${file.name}-${file.lastModified}`}
                color='surface'
                variant='primary'
                className='flex w-full gap-4 border border-stroke bg-surface pr-4 pl-4'
              >
                <span className='truncate text-base text-content-primary'>{file.name}</span>
                <Button
                  variant='icon'
                  padding='none'
                  onClick={() => handleRemoveFile(file)}
                  className='bg-transparent'
                >
                  <Trash2 className='h-4 w-4 stroke-error' />
                </Button>
              </Badge>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}

export { FileUpload };
