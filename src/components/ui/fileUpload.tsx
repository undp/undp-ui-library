import React, { useState } from 'react';
import { Upload, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn, generateRandomId } from '@/lib/utils';
import { Badge } from './badge';
import { P } from './typography';
import { Label } from './label';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onFileChange?: (_d: File[]) => void;
}

function FileUpload({ onFileChange, children, ...props }: Props) {
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
      <div
        className={cn(
          'flex flex-col items-center gap-4 mb-2.5 w-full',
          props.className,
        )}
      >
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
            <div className='flex flex-col w-full bg-primary-gray-200 dark:bg-primary-gray-600 px-4 py-6 items-center gap-2 border border-primary-gray-300 dark:border-primary-gray-550'>
              <Upload className='w-7 h-7 stroke-1 stroke-primary-gray-500 dark:stroke-primary-gray-400' />
              <P className='text-primary-gray-550 dark:text-primary-gray-300 text-sm md:text-sm'>
                Click on this area to upload
              </P>
            </div>
          )}
        </label>
      </div>
      {files.length > 0 ? (
        <>
          <Label>File(s) uploaded</Label>
          <div className='w-full flex flex-wrap gap-2.5 justify-left mt-1'>
            {files?.map((file, index) => (
              <Badge
                key={index}
                variant='gray'
                className='flex gap-4 bg-primary-gray-200 dark:bg-primary-gray-600 border border-primary-gray-300 dark:border-primary-gray-600 pr-4 pl-4'
              >
                <span className='truncate text-primary-gray-500 dark:text-primary-gray-400 text-base'>
                  {file.name}
                </span>
                <Button
                  variant='icon'
                  padding='none'
                  onClick={() => handleRemoveFile(index)}
                >
                  <Trash2 className='w-4 h-4 stroke-accent-red' />
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
