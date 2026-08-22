import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Tabs>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'foreground',

        'success',
        'danger',
        'warning',
        'info',

        'male',
        'female',
        'urban',
        'rural',

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

        'red',
        'orange',
        'amber',
        'yellow',
        'lime',
        'green',
        'teal',
        'azure',
        'blue',
        'violet',
        'pink',
      ],
      defaultValue: { summary: 'primary' },
    },
    defaultValue: { control: { type: 'text' } },
  },
  args: { defaultValue: 'tab 1', color: 'primary' },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
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
