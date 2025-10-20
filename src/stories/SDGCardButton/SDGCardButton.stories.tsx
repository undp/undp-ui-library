import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SDGCardButton } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof SDGCardButton>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/SDGCardButton',
  component: SDGCardButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: { type: 'text' },
      type: 'string',
      defaultValue: { summary: 'var(--blue-600)' },
    },
    textColor: {
      control: { type: 'text' },
      type: 'string',
      defaultValue: { summary: '#fff' },
    },
    index: {
      control: { type: 'text' },
      type: 'string',
    },
    text: {
      control: { type: 'text' },
      type: 'string',
    },
    indexClassName: { control: { type: 'text' } },
    textClassName: { control: { type: 'text' } },
  },
  args: {
    text: 'No Poverty',
    index: '1',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <SDGCardButton
          {...args}
          onClick={d => {
            // eslint-disable-next-line no-console
            console.log(d);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof SDGCardButton>;

export const Default: Story = {};
