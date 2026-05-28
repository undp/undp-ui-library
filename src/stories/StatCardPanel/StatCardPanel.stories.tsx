import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import {
  StatsPanel,
  StatsPanelCard,
  StatsPanelCardDescription,
  StatsPanelCardTitle,
  StatsPanelCardValue,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof StatsPanel>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Stat Card Panel',
  component: StatsPanel,
  tags: ['autodocs'],
  // biome-ignore lint/correctness/noUnusedFunctionParameters: args are not used
  render: ({ ...args }, { globals: { theme, direction, language } }) => (
    <div
      dir={direction}
      className={`p-4 ${theme} ${language} ${
        theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
      }`}
    >
      <StatsPanel>
        <StatsPanelCard>
          <StatsPanelCardValue>39</StatsPanelCardValue>
          <StatsPanelCardTitle>Percent</StatsPanelCardTitle>
          <StatsPanelCardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StatsPanelCardDescription>
        </StatsPanelCard>
        <StatsPanelCard>
          <StatsPanelCardValue>39</StatsPanelCardValue>
          <StatsPanelCardTitle>Percent</StatsPanelCardTitle>
          <StatsPanelCardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StatsPanelCardDescription>
        </StatsPanelCard>
        <StatsPanelCard>
          <StatsPanelCardValue>39</StatsPanelCardValue>
          <StatsPanelCardTitle>Percent</StatsPanelCardTitle>
          <StatsPanelCardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StatsPanelCardDescription>
        </StatsPanelCard>
        <StatsPanelCard>
          <StatsPanelCardValue>39</StatsPanelCardValue>
          <StatsPanelCardTitle>Percent</StatsPanelCardTitle>
          <StatsPanelCardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StatsPanelCardDescription>
        </StatsPanelCard>
      </StatsPanel>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof StatsPanel>;

export const Default: Story = {};
