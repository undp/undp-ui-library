import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Drawer>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'inline-radio' },
      options: ['top', 'bottom', 'left', 'right'],
      defaultValue: { summary: 'right' },
    },
  },
  args: {
    direction: 'right',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Drawer direction={args.direction}>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>This is the footer</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {};
