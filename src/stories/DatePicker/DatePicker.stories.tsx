import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { DatePicker } from '@/index';

type DatePickerPropsAndCustomArgs = React.ComponentProps<typeof DatePicker>;

const meta: Meta<DatePickerPropsAndCustomArgs> = {
  title: 'Components/Date Picker',
  component: DatePicker,
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
      defaultValue: { summary: 'Pick a date' },
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
    placeHolder: 'Pick a date',
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
        <div className='w-64'>
          <DatePicker {...args} />
        </div>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};
