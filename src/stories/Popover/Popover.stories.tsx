import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
  H6,
  P,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Popover>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  render: (_args, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Popover>
          <PopoverTrigger>
            <Button variant='outline'>Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <div>
                <H6>Dimensions</H6>
                <P>Set the dimensions for the layer.</P>
              </div>
              <div className='flex flex-col gap-4'>
                <Input id='width' defaultValue='100%' />
                <Input id='maxWidth' defaultValue='300px' />
                <Input id='height' defaultValue='25px' />
                <Input id='maxHeight' defaultValue='none' />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {};
