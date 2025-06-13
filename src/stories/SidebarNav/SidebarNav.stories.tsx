import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar, SidebarItem } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Sidebar>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Sidebar Navigation',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['noEffect', 'background', 'border'],
      defaultValue: { summary: 'background' },
    },
    activeItemClass: { control: { type: 'text' } },
    hoverItemClass: { control: { type: 'text' } },
    defaultValue: { control: { type: 'text' } },
    activeValue: { control: { type: 'text' } },
  },
  args: { variant: 'background' },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Sidebar
          {...args}
          defaultValue='item 2'
          onValueChange={d => {
            // eslint-disable-next-line no-console
            console.log(d);
          }}
        >
          <SidebarItem value='item 1'>Item 1</SidebarItem>
          <SidebarItem value='item 2'>Item 2</SidebarItem>
          <SidebarItem value='item 3'>Item 3</SidebarItem>
        </Sidebar>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
