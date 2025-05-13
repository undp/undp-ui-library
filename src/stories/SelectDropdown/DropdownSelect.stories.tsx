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
      defaultValue: { summary: 'normal' },
    },
    size: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['sm', 'base'],
      defaultValue: { summary: 'base' },
    },
    truncateLabel: {
      type: 'boolean',
      defaultValue: { summary: false },
    },
    isClearable: {
      type: 'boolean',
      defaultValue: { summary: false },
    },
    isSearchable: {
      type: 'boolean',
      defaultValue: { summary: false },
    },
    isMulti: {
      type: 'boolean',
      defaultValue: { summary: false },
    },
    isDisabled: {
      type: 'boolean',
      defaultValue: { summary: false },
    },
    maxTagCount: {
      type: 'number',
    },
  },
  args: {
    variant: 'normal',
    size: 'base',
    truncateLabel: false,
    isClearable: false,
    isSearchable: false,
    isMulti: false,
    isDisabled: false,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <DropdownSelect
          {...args}
          // eslint-disable-next-line no-console
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
