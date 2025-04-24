import type { Meta, StoryObj } from '@storybook/react';
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
      options: [
        'primary',
        'primary-without-icon',
        'secondary',
        'secondary-without-icon',
        'tertiary',
        'link',
        'link-without-icon',
        'outline',
        'icon',
      ],
      defaultValue: { summary: 'primary' },
    },
    size: {
      control: { type: 'select' },
      type: 'string',
      options: ['base', 'xs', 'sm', 'xl'],
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
    padding: 'base',
  },
  parameters: { docs: { source: 'auto' } },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Button
          {...args}
          onClick={() => {
            // eslint-disable-next-line no-console
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
