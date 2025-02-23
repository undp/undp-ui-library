import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Spacer, H6 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Spacer>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      defaultValue: 'base',
    },
  },
  args: {
    size: 'base',
  },
  render: ({ ...args }) => (
    <>
      <H6>Heading 1</H6>
      <Spacer {...args} />
      <H6>Heading 2</H6>
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof Spacer>;

export const Default: Story = {};
