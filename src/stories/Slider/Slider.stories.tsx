import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SliderUI } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof SliderUI>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Slider',
  component: SliderUI,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['red', 'blue', 'black', 'custom'],
      defaultValue: 'red',
    },
    min: {
      control: { type: 'number' },
      defaultValue: { summary: 1 },
    },
    max: {
      control: { type: 'number' },
      defaultValue: { summary: 100 },
    },
    step: {
      control: { type: 'number' },
      defaultValue: { summary: 1 },
    },
    className: { control: { type: 'text' } },
    trackClassName: { control: { type: 'text' } },
    sliderClassName: { control: { type: 'text' } },
    railClassName: { control: { type: 'text' } },
    handleClassName: { control: { type: 'text' } },
    showHandleValue: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    range: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  args: {
    min: 1,
    max: 100,
    step: 1,
    showHandleValue: false,
    disabled: false,
    range: false,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <SliderUI
          {...args}
          onChange={d => {
            // eslint-disable-next-line no-console
            console.log('Change:', d);
          }}
          onChangeComplete={d => {
            // eslint-disable-next-line no-console
            console.log('Change completed:', d);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof SliderUI>;

export const Default: Story = {};
