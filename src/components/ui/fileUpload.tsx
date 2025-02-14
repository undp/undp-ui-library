import React, { useState } from 'react';
import { Upload, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn, generateRandomId } from '@/lib/utils';
import { Badge } from './badge';
import { P } from './typography';
import { Label } from './label';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  fileChange?: (_d: File[]) => void;
}

function FileUpload({ fileChange, children, ...props }: Props) {
  const idForHtml = props.id || generateRandomId();
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      let updatedFiles = [...Array.from(event.target.files)];
      if (props.multiple) {
        updatedFiles = [...files, ...Array.from(event.target.files)];
      }
      setFiles(updatedFiles);
      fileChange?.(updatedFiles);
    }
  };
  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    fileChange?.(updatedFiles);
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
            <div className='flex flex-col w-full bg-primary-gray-200 p-4 items-center gap-3 border border-primary-gray-300 '>
              <Upload className='w-7 h-7 stroke-1 stroke-primary-gray-500' />
              <P className='text-primary-gray-550 text-sm md:text-sm'>
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
                className='flex gap-4 bg-primary-gray-200 border border-primary-gray-300 pr-4 pl-4'
              >
                <span className='truncate text-primary-gray-500 text-base'>
                  {file.name}
                </span>
                <Button
                  variant='icon'
                  padding='none'
                  onClick={() => handleRemoveFile(index)}
                >
                  <Trash2 className='w-4 h-4 text-red-500' />
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
