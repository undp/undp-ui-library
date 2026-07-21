import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Carousel, CarouselItem } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof CarouselItem>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Carousel or Slider',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: { summary: 'sm' },
    },
  },
  args: { size: 'sm' },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Carousel>
          <CarouselItem {...args}>
            <div className='h-96 bg-surface-sm' />
          </CarouselItem>
          <CarouselItem {...args}>
            <div className='h-96 bg-surface-sm' />
          </CarouselItem>
          <CarouselItem {...args}>
            <div className='h-96 bg-surface-sm' />
          </CarouselItem>
          <CarouselItem {...args}>
            <div className='h-96 bg-surface-sm' />
          </CarouselItem>
        </Carousel>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {};
