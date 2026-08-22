import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Spinner } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Spinner>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'foreground',

        'male',
        'female',
        'urban',
        'rural',

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

        'red',
        'orange',
        'amber',
        'yellow',
        'lime',
        'green',
        'teal',
        'azure',
        'blue',
        'violet',
        'pink',
      ],
      defaultValue: { summary: 'primary' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'base', 'lg'],
      defaultValue: { summary: 'base' },
    },
    show: {
      control: { type: 'boolean' },
      defaultValue: { summary: true },
    },
  },
  args: {
    color: 'primary',
    size: 'base',
    show: true,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Spinner {...args} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
