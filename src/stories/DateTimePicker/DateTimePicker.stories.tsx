import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { DateTimePicker } from '@/index';

type DateTimePickerPropsAndCustomArgs = React.ComponentProps<typeof DateTimePicker>;

const meta: Meta<DateTimePickerPropsAndCustomArgs> = {
  title: 'Components/Date Time Picker',
  component: DateTimePicker,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['light', 'normal'],
      defaultValue: { summary: 'normal' },
    },
    inputSize: {
      control: { type: 'select' },
      options: ['sm', 'base'],
      defaultValue: { summary: 'base' },
    },
    rounded: {
      control: { type: 'select' },
      options: ['base', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      defaultValue: { summary: 'base' },
    },
    placeHolder: {
      control: { type: 'text' },
      defaultValue: { summary: 'Pick a date and time' },
    },
    disabledHours: {
      control: { type: 'object' },
      defaultValue: { summary: '[]' },
    },
    disabledMinutes: {
      control: { type: 'object' },
      defaultValue: { summary: '[]' },
    },
  },
  args: {
    variant: 'normal',
    inputSize: 'base',
    rounded: 'base',
    placeHolder: 'Pick a date and time',
    disabledHours: [],
    disabledMinutes: [],
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <div className='w-80'>
          <DateTimePicker {...args} />
        </div>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DateTimePicker>;

export const Default: Story = {};
