import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { DateTimeRangePicker } from '@/index';

type DateTimeRangePickerPropsAndCustomArgs = React.ComponentProps<typeof DateTimeRangePicker>;

const meta: Meta<DateTimeRangePickerPropsAndCustomArgs> = {
  title: 'Components/Date Time Range Picker',
  component: DateTimeRangePicker,
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
    defaultValue: {
      control: { type: 'object' },
      defaultValue: { summary: 'undefined' },
    },
    disablePopover: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  args: {
    variant: 'normal',
    inputSize: 'base',
    rounded: 'base',
    disablePopover: false,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <DateTimeRangePicker {...args} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DateTimeRangePicker>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: {
      startDate: new Date(2026, 7, 21, 9, 30),
      endDate: new Date(2026, 7, 21, 17, 0),
    },
  },
};

export const Small: Story = {
  args: {
    inputSize: 'sm',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
  },
};

export const Rounded: Story = {
  args: {
    rounded: 'full',
  },
};
