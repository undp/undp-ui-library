import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Stepper>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
    unfinishedStepsClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    finishedStepsClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    activeStepsClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    currentStep: {
      control: { type: 'number' },
      defaultValue: 0,
    },
  },
  args: {
    currentStep: 1,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Stepper
          {...args}
          steps={[
            {
              title: 'Step 1',
              description: 'Step 1 description',
            },
            {
              title: 'Step 2',
              description: 'Step 2 description',
            },
            {
              title: 'Step 3',
            },
          ]}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {};
