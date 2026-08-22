import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { DateRangePicker } from '@/index';

type DateRangePickerPropsAndCustomArgs = React.ComponentProps<typeof DateRangePicker>;

const meta: Meta<DateRangePickerPropsAndCustomArgs> = {
  title: 'Components/Date Range Picker',
  component: DateRangePicker,
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
    numberOfMonths: {
      control: { type: 'number' },
      defaultValue: { summary: '2' },
    },
  },
  args: {
    variant: 'normal',
    inputSize: 'base',
    rounded: 'base',
    numberOfMonths: 2,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <div className='w-96'>
          <DateRangePicker {...args} />
        </div>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {};
