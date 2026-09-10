import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { StatCard, StatCardDescription, StatCardTitle, StatCardValue } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof StatCard>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Cards/Stat Card',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    hoverColor: {
      control: { type: 'select' },
      options: [
        'transparent',
        'background',
        'background-soft',
        'foreground',
        'foreground-soft',
        'surface',
        'surface-xl',
        'surface-2xl',
        'surface-3xl',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'error',
        'info',
        'warning',

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
      defaultValue: { summary: 'warning' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: { summary: 'base' },
    },
  },
  args: {
    hoverColor: 'warning',
    size: 'base',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <StatCard {...args}>
          <StatCardValue>39</StatCardValue>
          <StatCardTitle>Percent</StatCardTitle>
          <StatCardDescription>Lorem ipsum dolor sit amet</StatCardDescription>
        </StatCard>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof StatCard>;

export const Default: Story = {};
