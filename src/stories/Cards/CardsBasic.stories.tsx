import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardTag,
  CardTitle,
  CardDescription,
  CardImage,
  CardFooter,
  CardHeader,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Card>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Cards/Basic',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['with-image', 'without-image'],
      defaultValue: 'with-image',
    },
    backgroundColor: {
      control: { type: 'select' },
      options: [
        'transparent',
        'white',
        'gray',
        'dark-gray',
        'black',
        'blue',
        'azure',
        'yellow',
        'red',
        'green',
        'custom',
      ],
      defaultValue: 'white',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: 'full',
    },
    border: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  args: {
    variant: 'with-image',
    backgroundColor: 'white',
    size: 'full',
    border: true,
  },
  render: ({ ...args }, { globals: { theme } }) => {
    return (
      <div
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Card {...args}>
          <CardHeader>
            <CardTag>Tag here</CardTag>
            {args.variant === 'with-image' ? (
              <CardImage src='https://plus.unsplash.com/premium_photo-1738857914575-3d3b2fb7064e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            ) : null}
            <CardTitle>Card title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              blandit augue eu sagittis facilisis. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
            </CardDescription>
          </CardHeader>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
