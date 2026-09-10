import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Separator } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Separator>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      type: 'string',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'background',
        'background-soft',
        'foreground',
        'foreground-soft',
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

        'error',
        'warning',
        'info',
        'success',

        'male',
        'female',
        'urban',
        'rural',
        'child',
        'adolescent',
        'young-adult',
        'adult',
        'older-adult',

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
      defaultValue: { summary: 'surface' },
    },
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
      defaultValue: { summary: 'horizontal' },
    },
    thickness: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: { summary: 'xs' },
    },
  },
  args: {
    color: 'surface',
    orientation: 'horizontal',
    thickness: 'xs',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Separator {...args} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {};
