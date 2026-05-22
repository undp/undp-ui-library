import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

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
          // biome-ignore lint/suspicious/noConsole: This is to test in storybook
          onChange={(d) => console.log(d)}
          options={[
            {
              label: 'Fruits',
              options: [
                { value: 'apple', label: 'Apple' },
                { value: 'orange', label: 'Orange' },
              ],
            },
            {
              label: 'Vegetables',
              options: [
                { value: 'carrot', label: 'Carrot' },
                { value: 'broccoli', label: 'Broccoli' },
              ],
            },
          ]}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DropdownSelect>;

export const Default: Story = {};
