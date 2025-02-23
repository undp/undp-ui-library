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
  render: () => (
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
          <div>
            <Input id='width' defaultValue='100%' label='width' />
            <Input id='maxWidth' defaultValue='300px' label='Max width' />
            <Input id='height' defaultValue='25px' label='Height' />
            <Input id='maxHeight' defaultValue='none' label='Max. height' />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {};
