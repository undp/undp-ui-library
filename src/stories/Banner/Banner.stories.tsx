import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Banner,
  BannerBody,
  BannerBodySidebar,
  BannerBodyContent,
  H3,
  P,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Banner>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Banner',
  component: Banner,
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
    padding: {
      control: { type: 'select' },
      options: ['none', '2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: 'base',
    },
    bodyMaxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: 'full',
    },
    bodyGap: {
      control: { type: 'select' },
      options: ['none', '2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: 'base',
    },
    sidebarWidth: {
      control: { type: 'select' },
      options: ['sm', 'base', 'lg', 'full'],
      defaultValue: 'base',
    },
  },
  args: {
    backgroundColor: 'gray',
    padding: 'base',
    bodyMaxWidth: 'full',
    bodyGap: 'base',
    sidebarWidth: 'base',
  },
  render: ({ ...args }) => (
    <Banner {...args}>
      <BannerBody>
        <BannerBodySidebar>
          <H3>Title</H3>
        </BannerBodySidebar>
        <BannerBodyContent>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            blandit augue eu sagittis facilisis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </P>
        </BannerBodyContent>
      </BannerBody>
    </Banner>
  ),
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {};
