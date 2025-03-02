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
      defaultValue: 1,
    },
    max: {
      control: { type: 'number' },
      defaultValue: 100,
    },
    step: {
      control: { type: 'number' },
      defaultValue: 1,
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
    trackClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    sliderClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    railClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    handleClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    showHandleValue: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    range: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  args: {
    min: 1,
    max: 100,
    step: 1,
    showHandleValue: false,
    range: false,
  },
  render: ({ ...args }, { globals: { theme } }) => {
    return (
      <div
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <SliderUI
          {...args}
          onChange={d => {
            console.log('Change:', d);
          }}
          onChangeComplete={d => {
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
