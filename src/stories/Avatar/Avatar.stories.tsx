import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/index';

type AvatarPropsAndCustomArgs = React.ComponentProps<typeof Avatar>;

const meta: Meta<AvatarPropsAndCustomArgs> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      defaultValue: { summary: 'default' },
    },
    color: {
      control: { type: 'select' },
      options: [
        'transparent',
        'background',
        'background-soft',
        'foreground',
        'foreground-soft',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'warning',
        'info',
        'error',
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
  },
  args: {
    size: 'default',
    color: 'primary',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`flex min-h-32 items-center justify-center p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Avatar {...args}>
          <AvatarImage src='https://i.pravatar.cc/150?img=12' alt='User avatar' />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
