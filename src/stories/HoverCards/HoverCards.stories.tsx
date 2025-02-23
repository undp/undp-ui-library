import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof HoverCard>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Hover card',
  component: HoverCard,
  tags: ['autodocs'],
  render: () => (
    <HoverCard>
      <HoverCardTrigger>Hover here</HoverCardTrigger>
      <HoverCardContent>This is docs for UNDP design system</HoverCardContent>
    </HoverCard>
  ),
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {};
