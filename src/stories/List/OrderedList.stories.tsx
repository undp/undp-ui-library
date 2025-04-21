import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Ol,
  Li,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Ol>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Lists/Ordered',
  component: Ol,
  tags: ['autodocs'],
  args: {},
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Ol {...args}>
          <Li>List item 1</Li>
          <Li>List item 1</Li>
          <Li>List item 1</Li>
        </Ol>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Ol>;

export const Default: Story = {};
