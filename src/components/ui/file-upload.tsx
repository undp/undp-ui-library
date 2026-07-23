import { Trash2, Upload } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn, generateRandomId } from '@/lib/utils';
import { Badge } from './badge';
import { Label } from './label';
import { P } from './typography';

function FileUpload({
  onFileChange,
  children,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  onFileChange?: (_d: File[]) => void;
}) {
  const idForHtml = props.id || generateRandomId();
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      let updatedFiles = [...Array.from(event.target.files)];
      if (props.multiple) {
        updatedFiles = [...files, ...Array.from(event.target.files)];
      }
      setFiles(updatedFiles);
      onFileChange?.(updatedFiles);
    }
  };
  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFileChange?.(updatedFiles);
  };

  return (
    <>
      <div className={cn('mb-2.5 flex w-full flex-col items-center gap-4', props.className)}>
        <input
          {...props}
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
            {files?.map((file, index) => (
              <Badge
                key={file.name}
                variant='surface'
                className='flex gap-4 border border-stroke bg-surface pr-4 pl-4'
              >
                <span className='truncate text-base text-content-primary'>{file.name}</span>
                <Button variant='icon' padding='none' onClick={() => handleRemoveFile(index)}>
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
