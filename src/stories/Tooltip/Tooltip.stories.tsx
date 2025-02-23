import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Button,
  P,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Tooltip>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <P className='m-0 p-0 md:m-0 md:p-0'>Add to library</P>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
