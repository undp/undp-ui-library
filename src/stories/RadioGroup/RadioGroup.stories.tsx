import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { RadioGroup, RadioGroupItem } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof RadioGroup>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    className: { control: { type: 'text' } },
    color: {
      control: { type: 'inline-radio' },
      type: 'string',
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
        'child',
        'adolescent',
        'young-adult',
        'adult',
        'older-adult',
      ],
      defaultValue: { summary: 'primary' },
    },
    variant: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['light', 'normal'],
      defaultValue: { summary: 'normal' },
    },
  },
  args: {
    color: 'primary',
    variant: 'normal',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <RadioGroup
          {...args}
          onValueChange={(d) => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
            console.log(d);
          }}
        >
          <RadioGroupItem label='Radio 1' value='Radio_1' />
          <RadioGroupItem label='Radio 2' value='Radio_2' />
        </RadioGroup>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {};
