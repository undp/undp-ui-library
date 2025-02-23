import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SDGIcons } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof SDGIcons>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Icons/SDGs',
  component: SDGIcons,
  tags: ['autodocs'],
  argTypes: {
    sdg: {
      control: { type: 'select' },
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
      ],
      defaultValue: '1',
    },
    size: {
      control: { type: 'number' },
      defaultValue: 100,
    },
    background: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  args: {
    sdg: '1',
    size: 100,
    background: true,
  },
  render: ({ ...args }) => <SDGIcons {...args} />,
};

export default meta;

type Story = StoryObj<typeof SDGIcons>;

export const Default: Story = {};
