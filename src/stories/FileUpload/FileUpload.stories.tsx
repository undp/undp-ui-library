import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UploadIcon } from 'lucide-react';

import { FileUpload } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof FileUpload>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/File Upload Button',
  component: FileUpload,
  tags: ['autodocs'],
  render: (_args, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <FileUpload
          onFileChange={d => {
            // eslint-disable-next-line no-console
            console.log(d);
          }}
        >
          <div className='flex flex-col px-4 py-6 gap-2 justify-center items-center w-full bg-primary-gray-200 border border-primary-gray-300'>
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
