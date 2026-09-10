import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Bubble, BubbleContent, BubbleGroup } from '@/index';

type BubblePropsAndCustomArgs = React.ComponentProps<typeof Bubble>;

const meta: Meta<BubblePropsAndCustomArgs> = {
  title: 'Components/Bubble',
  component: Bubble,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
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
        'outline',
      ],
      defaultValue: { summary: 'primary' },
    },
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`flex min-h-32 items-center justify-center p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <BubbleGroup className='w-100'>
          <Bubble {...args}>
            <BubbleContent>Hello! This is a bubble message.</BubbleContent>
          </Bubble>
        </BubbleGroup>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Bubble>;

export const Default: Story = {};
