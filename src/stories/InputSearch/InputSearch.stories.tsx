import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Search } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Search>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    inputClassName: { control: { type: 'text' } },
    buttonClassName: { control: { type: 'text' } },
    inputSize: {
      control: { type: 'inline-radio' },
      options: ['sm', 'base'],
      defaultValue: { summary: 'base' },
    },
    rounded: {
      control: { type: 'select' },
      options: ['base', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      defaultValue: 'base',
    },
    inputVariant: {
      control: { type: 'inline-radio' },
      options: ['light', 'normal'],
      defaultValue: { summary: 'base' },
    },
    buttonColor: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'error',
        'info',
        'warning',
        'background',
        'surface',
        'surface-2xs',
        'surface-xs',
        'surface-sm',
        'surface-md',
        'surface-lg',
        'surface-xl',
        'surface-2xl',
        'surface-3xl',
        'surface-4xl',
        'foreground',
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
        'child',
        'adolescent',
        'young-adult',
        'adult',
        'older-adult',
      ],
    },
    searchOnlyOnClick: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    showSearchButton: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  args: {
    inputVariant: 'normal',
    inputSize: 'base',
    searchOnlyOnClick: false,
    showSearchButton: true,
    rounded: 'base',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Search
          {...args}
          onSearch={(d) => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
            console.log(d);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {};
