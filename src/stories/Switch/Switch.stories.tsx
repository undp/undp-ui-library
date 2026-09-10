import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Switch } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Switch>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Switch',
  component: Switch,
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

        'error',
        'warning',
        'info',
        'success',

        'male',
        'female',
        'urban',
        'rural',
        'child',
        'adolescent',
        'young-adult',
        'adult',
        'older-adult',

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
    size: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['small', 'normal'],
      defaultValue: { summary: 'normal' },
    },
    className: { control: { type: 'text' } },
  },
  args: {
    color: 'primary',
    size: 'normal',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Switch
          {...args}
          onChange={(d) => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
            console.log(d);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
