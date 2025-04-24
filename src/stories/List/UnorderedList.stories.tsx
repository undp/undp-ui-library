import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Ul,
  Li,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Ul>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Lists/Unordered',
  component: Ul,
  tags: ['autodocs'],
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Ul {...args}>
          <Li>List item 1</Li>
          <Li>List item 1</Li>
          <Li>List item 1</Li>
        </Ul>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Ul>;

export const Default: Story = {};
