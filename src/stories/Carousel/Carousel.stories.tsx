import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, CarouselCard } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof CarouselCard>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Carousel or Slider',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: 'sm',
    },
  },
  args: {
    size: 'sm',
  },
  render: ({ ...args }) => (
    <Carousel>
      <CarouselCard {...args}>
        <div className='h-96 bg-primary-gray-300' />
      </CarouselCard>
      <CarouselCard {...args}>
        <div className='h-96 bg-primary-gray-300' />
      </CarouselCard>
      <CarouselCard {...args}>
        <div className='h-96 bg-primary-gray-300' />
      </CarouselCard>
      <CarouselCard {...args}>
        <div className='h-96 bg-primary-gray-300' />
      </CarouselCard>
    </Carousel>
  ),
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {};
