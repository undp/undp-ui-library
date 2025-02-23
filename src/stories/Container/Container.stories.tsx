import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, H4, P } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Container>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
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
      ],
      defaultValue: 'transparent',
    },
    layout: {
      control: { type: 'inline-radio' },
      options: ['flex', 'default'],
      defaultValue: 'default',
    },
    width: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: 'base',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', '2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: 'base',
    },
    gap: {
      control: { type: 'select' },
      options: ['none', '2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: 'base',
    },
  },
  args: {
    backgroundColor: 'transparent',
    layout: 'default',
    padding: 'base',
    gap: 'none',
    width: 'full',
  },
  render: ({ ...args }) => (
    <Container {...args}>
      <H4>Heading</H4>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
        augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos.
      </P>
    </Container>
  ),
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {};
