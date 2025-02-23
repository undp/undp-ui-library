import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { P } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof P>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Paragraph',
  component: P,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }) => (
    <P {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
      augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos.
    </P>
  ),
};

export default meta;

type Story = StoryObj<typeof P>;

export const Default: Story = {};
