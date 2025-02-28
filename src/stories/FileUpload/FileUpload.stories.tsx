import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UploadIcon } from 'lucide-react';
import { FileUpload } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof FileUpload>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/File Upload Button',
  component: FileUpload,
  tags: ['autodocs'],
  render: (_args, { globals: { theme } }) => {
    return (
      <div
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <FileUpload
          onFileChange={d => {
            console.log(d);
          }}
        >
          <div className='flex flex-col gap-4 justify-center items-center w-full bg-primary-gray-200 border border-primary-gray-300 p-4'>
            <UploadIcon />
            Upload files
          </div>
        </FileUpload>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {};
