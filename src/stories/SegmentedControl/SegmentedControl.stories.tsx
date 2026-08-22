import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { SegmentedControl } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof SegmentedControl>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Segmented Control',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: { type: 'text' } },
    classNames: { control: { type: 'object' } },
    value: { control: { type: 'text' } },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'base'],
      defaultValue: { summary: 'base' },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['normal', 'light'],
      defaultValue: { summary: 'normal' },
    },
    color: {
      control: { type: 'inline-radio' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'foreground',
        'surface',

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
    rounded: {
      control: { type: 'inline-radio' },
      options: ['base', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      defaultValue: { summary: 'base' },
    },
  },
  args: {
    defaultValue: 'option 1',
    size: 'base',
    variant: 'normal',
    color: 'primary',
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
        <SegmentedControl
          {...args}
          onValueChange={(d) => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
            console.log(d);
          }}
          options={[
            {
              label: 'Option 1',
              value: 'option 1',
            },
            {
              label: 'Option 2',
              value: 'option 2',
            },
            {
              label: 'Option 3',
              value: 'option 3',
            },
          ]}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {};
