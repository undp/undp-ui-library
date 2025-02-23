import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Search } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Search>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: '',
    },
    labelClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    inputClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    buttonClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'base'],
      defaultValue: 'base',
    },
    buttonVariant: {
      control: { type: 'select' },
      options: [
        'primary',
        'primary-without-icon',
        'secondary',
        'secondary-without-icon',
        'tertiary',
        'tertiary-without-icon',
        'link',
        'link-without-icon',
        'outline',
        'icon',
      ],
      defaultValue: 'secondary-without-icon',
    },
    searchOnlyOnClick: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  args: {
    label: 'Search by',
    buttonVariant: 'secondary-without-icon',
    searchOnlyOnClick: false,
  },
  render: ({ ...args }) => (
    <Search
      {...args}
      onSearch={d => {
        console.log(d);
      }}
    />
  ),
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {};
