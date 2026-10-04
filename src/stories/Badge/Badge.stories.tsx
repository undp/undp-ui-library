import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '@/index';
import '../../index.css';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'outline'],
      defaultValue: { summary: 'primary' },
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'warning',
        'success',
        'error',
        'info',

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
        'outline',
      ],
      defaultValue: { summary: 'surface' },
    },
    size: {
      control: { type: 'select' },
      type: 'string',
      options: ['base', 'xs', 'sm', 'lg', 'xl'],
      defaultValue: { summary: 'base' },
    },
    rounded: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['base', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      defaultValue: { summary: 'full' },
    },
  },
  args: {
    variant: 'primary',
    size: 'base',
    rounded: 'full',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Badge {...args}>Badge</Badge>
      </div>
    );
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
