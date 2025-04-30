import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { P } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof P>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Paragraph',
  component: P,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'base-responsive', 'lg', 'xl'],
      defaultValue: { summary: 'base-responsive' },
    },
    leading: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'base', 'lg', 'xl'],
      defaultValue: { summary: 'base' },
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['none', '3xs', '2xs', 'xs', 'sm', 'base', 'lg', 'xl'],
      defaultValue: { summary: 'base' },
    },
    className: { control: { type: 'text' } },
  },
  args: {
    size: 'base-responsive',
    leading: 'base',
    marginBottom: 'base',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <P {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu sagittis
          facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </P>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof P>;

export const Default: Story = {};
