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
      options: ['blue', 'azure', 'yellow', 'red', 'green', 'none'],
      defaultValue: { summary: 'yellow' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: { summary: 'base' },
    },
  },
  args: {
    hoverColor: 'yellow',
    size: 'base',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
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
