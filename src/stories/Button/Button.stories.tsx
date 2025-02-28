import type { Meta, StoryObj } from '@storybook/react';
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
        'tertiary-without-icon',
        'link',
        'link-without-icon',
        'outline',
        'icon',
      ],
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      type: 'string',
      options: ['base', 'xs', 'sm', 'xl'],
      defaultValue: 'base',
    },
    padding: {
      control: { type: 'select' },
      type: 'string',
      options: ['base', 'sm', 'none'],
      defaultValue: 'base',
    },
  },
  args: {
    variant: 'primary',
    size: 'base',
    padding: 'base',
  },
  parameters: {
    docs: {
      source: 'auto',
    },
  },
  render: ({ ...args }, { globals: { theme } }) => {
    return (
      <div
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Button
          {...args}
          onClick={() => {
            console.log('Hello world');
          }}
        >
          Click Me
        </Button>
      </div>
    );
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
