import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import {
  Button,
  FeaturedCard,
  FeaturedCardDescription,
  FeaturedCardFooter,
  FeaturedCardTag,
  FeaturedCardTitle,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof FeaturedCard>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Cards/Featured Card',
  component: FeaturedCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
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
    backgroundColor: 'yellow',
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
        <FeaturedCard {...args}>
          <FeaturedCardTag>Content tag</FeaturedCardTag>
          <FeaturedCardTitle>Lorem ipsum dolor sit amet</FeaturedCardTitle>
          <FeaturedCardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu sagittis
            facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </FeaturedCardDescription>
          <FeaturedCardFooter>
            <Button variant='link' padding='none'>
              Read more
            </Button>
          </FeaturedCardFooter>
        </FeaturedCard>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FeaturedCard>;

export const Default: Story = {};
