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
      control: { type: 'inline-radio' },
      options: ['primary', 'outline', 'icon', 'text', 'link', 'link-reverse'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'error',
        'info',
        'warning',
        'background',
        'surface',
        'surface-2xs',
        'surface-xs',
        'surface-sm',
        'surface-md',
        'surface-lg',
        'surface-xl',
        'surface-2xl',
        'surface-3xl',
        'surface-4xl',
        'foreground',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'teal',
        'azure',
        'blue',
        'violet',
        'pink',
        'sdg-1',
        'sdg-2',
        'sdg-3',
        'sdg-4',
        'sdg-5',
        'sdg-6',
        'sdg-7',
        'sdg-8',
        'sdg-9',
        'sdg-10',
        'sdg-11',
        'sdg-12',
        'sdg-13',
        'sdg-14',
        'sdg-15',
        'sdg-16',
        'sdg-17',
        'male',
        'female',
        'urban',
        'rural',
        'child',
        'adolescent',
        'young-adult',
        'adult',
        'older-adult',
      ],
      defaultValue: { summary: 'primary' },
    },
    endIcon: {
      control: { type: 'inline-radio' },
      options: ['arrow', 'download', 'external-link', 'arrow-2', 'none'],
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
    endIcon: undefined,
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
