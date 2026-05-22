import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { UNDPLogo } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof UNDPLogo>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Icons/Logo',
  component: UNDPLogo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['blue', 'white'],
      defaultValue: { summary: 'blue' },
    },
    width: {
      control: { type: 'number' },
      defaultValue: { summary: 60 },
    },
  },
  args: {
    variant: 'blue',
    width: 60,
  },
  render: ({ ...args }) => <UNDPLogo {...args} />,
};

export default meta;

type Story = StoryObj<typeof UNDPLogo>;

export const Default: Story = {};
