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
    color: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'foreground',
        'surface',
        'error',
        'warning',
        'info',
        'success',

        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'teal',
        'azure',
        'blue',
        'violet',
        'pink',

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

        'male',
        'female',
        'urban',
        'rural',
      ],
      defaultValue: { summary: 'primary' },
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
    showCheck: {
      type: 'boolean',
      defaultValue: { summary: true },
    },
    maxTagCount: {
      type: 'number',
    },
  },
  args: {
    variant: 'normal',
    size: 'base',
    color: 'primary',
    truncateLabel: false,
    isClearable: false,
    isSearchable: false,
    isMulti: false,
    isDisabled: false,
    showCheck: true,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
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
                {
                  value: 'apple',
                  label:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ultricies felis, vitae congue sapien. Donec et facilisis nisi, a placerat justo. In hac habitasse platea dictumst. Cras fermentum congue iaculis. Suspendisse urna urna, lacinia vitae efficitur ac, posuere et arcu. Duis elementum, diam quis consequat scelerisque, purus nisl porttitor libero, cursus volutpat diam lectus et lectus. Duis vitae magna et eros fermentum lobortis.',
                },
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
