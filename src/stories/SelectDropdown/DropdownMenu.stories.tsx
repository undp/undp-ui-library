import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownSelect } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof DropdownSelect>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Dropdown select',
  component: DropdownSelect,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['light', 'normal'],
      defaultValue: 'normal',
    },
    size: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['sm', 'base'],
      defaultValue: 'base',
    },
    truncateLabel: {
      type: 'boolean',
      defaultValue: false,
    },
    isClearable: {
      type: 'boolean',
      defaultValue: false,
    },
    isSearchable: {
      type: 'boolean',
      defaultValue: false,
    },
    isMulti: {
      type: 'boolean',
      defaultValue: false,
    },
  },
  render: ({ ...args }, { globals: { theme } }) => {
    return (
      <div
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <DropdownSelect
          {...args}
          onChange={d => console.log(d)}
          options={[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'cherry', label: 'Cherry' },
          ]}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DropdownSelect>;

export const Default: Story = {};
