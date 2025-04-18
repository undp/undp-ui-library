import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Tabs>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['red', 'blue', 'black', 'custom'],
      defaultValue: 'red',
    },
    defaultValue: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: { defaultValue: 'tab 1' },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Tabs {...args}>
          <TabsList>
            <TabsTrigger value='tab 1'>Tab 1</TabsTrigger>
            <TabsTrigger value='tab 2'>Tab 2</TabsTrigger>
            <TabsTrigger value='tab 3'>Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value='tab 1'>
            <div>Tab 1 content</div>
          </TabsContent>
          <TabsContent value='tab 2'>
            <div>Tab 2 content</div>
          </TabsContent>
          <TabsContent value='tab 3'>
            <div>Tab 3 content</div>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};
