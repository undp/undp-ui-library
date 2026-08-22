import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Calendar } from '@/index';

type CalendarPropsAndCustomArgs = React.ComponentProps<typeof Calendar>;

const meta: Meta<CalendarPropsAndCustomArgs> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    captionLayout: {
      control: { type: 'select' },
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      defaultValue: { summary: 'label' },
    },
    buttonVariant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'secondary', 'ghost', 'link'],
      defaultValue: { summary: 'link' },
    },
    showOutsideDays: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'true' },
    },
    numberOfMonths: {
      control: { type: 'number' },
      defaultValue: { summary: '1' },
    },
  },
  args: {
    captionLayout: 'label',
    buttonVariant: 'link',
    showOutsideDays: true,
    numberOfMonths: 1,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Calendar {...args} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};
