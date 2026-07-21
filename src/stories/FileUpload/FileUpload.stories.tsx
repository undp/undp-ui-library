import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

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
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <FileUpload
          onFileChange={(d) => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
            console.log(d);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {};
