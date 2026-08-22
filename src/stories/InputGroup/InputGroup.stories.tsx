import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from 'lucide-react';
import type React from 'react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@/index';

type InputGroupPropsAndCustomArgs = React.ComponentProps<typeof InputGroup>;

const meta: Meta<InputGroupPropsAndCustomArgs> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['light', 'normal'],
      defaultValue: { summary: 'normal' },
    },
    rounded: {
      control: { type: 'select' },
      options: ['base', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      defaultValue: { summary: 'base' },
    },
  },
  args: {
    variant: 'normal',
    rounded: 'base',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`flex min-h-40 items-center justify-center p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <div className='w-full max-w-md'>
          <InputGroup {...args}>
            <InputGroupAddon>
              <InputGroupText variant='tertiary'>
                <Search />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder='Search...' />
            <InputGroupAddon align='inline-end'>
              <InputGroupButton aria-label='Search'>
                <Search />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {};
