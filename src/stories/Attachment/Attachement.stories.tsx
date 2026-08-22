import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileIcon, XIcon } from 'lucide-react';
import type React from 'react';
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from '@/index';

type AttachmentPropsAndCustomArgs = React.ComponentProps<typeof Attachment>;

const meta: Meta<AttachmentPropsAndCustomArgs> = {
  title: 'Components/Attachment',
  component: Attachment,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['idle', 'uploading', 'processing', 'error', 'done'],
      defaultValue: { summary: 'done' },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'xs'],
      defaultValue: { summary: 'default' },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      defaultValue: { summary: 'horizontal' },
    },
  },
  args: {
    state: 'done',
    size: 'default',
    orientation: 'horizontal',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Attachment {...args}>
          <AttachmentMedia>
            <FileIcon />
          </AttachmentMedia>

          <AttachmentContent>
            <AttachmentTitle>document.pdf</AttachmentTitle>
            <AttachmentDescription>2.4 MB</AttachmentDescription>
          </AttachmentContent>

          <AttachmentActions>
            <AttachmentAction aria-label='Remove attachment'>
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Attachment>;

export const Default: Story = {};
