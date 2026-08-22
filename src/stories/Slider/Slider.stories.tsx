import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { SliderUI } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof SliderUI>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Slider',
  component: SliderUI,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'foreground',

        'male',
        'female',
        'urban',
        'rural',

        'sdg-1',
        'sdg-2',
        'sdg-3',
        'sdg-4',
        'sdg-5',
        'sdg-6',
        'sdg-7',
        'sdg-8',
        'sdg-9',
        'sdg-10',
        'sdg-11',
        'sdg-12',
        'sdg-13',
        'sdg-14',
        'sdg-15',
        'sdg-16',
        'sdg-17',

        'red',
        'orange',
        'amber',
        'yellow',
        'lime',
        'green',
        'teal',
        'azure',
        'blue',
        'violet',
        'pink',
      ],
      defaultValue: 'primary',
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
    color: 'primary',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <SliderUI
          {...args}
          onChange={(d) => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
            console.log('Change:', d);
          }}
          onChangeComplete={(d) => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
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
