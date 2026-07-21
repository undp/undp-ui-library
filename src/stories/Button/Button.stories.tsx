import type { Meta, StoryObj } from '@storybook/react-vite';
import { Download } from 'lucide-react';

import { Button } from '@/index';

import '../../index.css';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'link', 'outline', 'icon'],
      defaultValue: { summary: 'primary' },
    },
    arrow: {
      control: { type: 'boolean' },
      type: 'boolean',
      defaultValue: { summary: true },
    },
    size: {
      control: { type: 'select' },
      type: 'string',
      options: ['base', 'xs', 'sm', 'xl'],
      defaultValue: { summary: 'base' },
    },
    rounded: {
      control: { type: 'select' },
      type: 'string',
      options: ['base', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      defaultValue: { summary: 'base' },
    },
    padding: {
      control: { type: 'select' },
      type: 'string',
      options: ['base', 'sm', 'none'],
      defaultValue: { summary: 'base' },
    },
  },
  args: {
    variant: 'primary',
    size: 'base',
    rounded: 'base',
    padding: 'base',
    arrow: true,
  },
  parameters: { docs: { source: 'auto' } },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Button
          {...args}
          onClick={() => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
            console.log('Hello world');
          }}
        >
          {args.variant === 'icon' ? <Download size={24} /> : 'Click Me'}
        </Button>
      </div>
    );
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
