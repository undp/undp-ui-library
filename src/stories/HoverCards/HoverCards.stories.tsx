import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof HoverCard>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Hover card',
  component: HoverCard,
  tags: ['autodocs'],
  render: (_args, { globals: { theme } }) => {
    return (
      <div
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <HoverCard>
          <HoverCardTrigger>Hover here</HoverCardTrigger>
          <HoverCardContent>
            This is docs for UNDP design system
          </HoverCardContent>
        </HoverCard>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {};
