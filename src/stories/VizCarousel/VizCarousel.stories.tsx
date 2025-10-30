import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { VizCarousel } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof VizCarousel>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Viz Slider or Carousel',
  component: VizCarousel,
  tags: ['autodocs'],
  argTypes: {
    vizWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: { summary: 'sm' },
    },
    classNames: { control: { type: 'object' } },
    styles: { control: { type: 'object' } },
    slideNo: { control: { type: 'boolean' } },
  },
  args: {
    vizWidth: 'base',
    slideNo: true,
    slides: [
      {
        content: (
          <div className='flex flex-col'>
            <h1>Slide 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu
              sagittis facilisis. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </div>
        ),
        viz: <div className='w-full h-full bg-primary-gray-300 min-h-[320px]' />,
      },
      {
        content: (
          <div className='flex flex-col'>
            <h1>Slide 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu
              sagittis facilisis. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </div>
        ),
        viz: <div className='w-full h-full bg-primary-gray-500' />,
      },
      {
        content: (
          <div className='flex flex-col'>
            <h1>Slide 3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu
              sagittis facilisis. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </div>
        ),
        viz: <div className='w-full h-full bg-primary-gray-300' />,
      },
    ],
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <VizCarousel {...args} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof VizCarousel>;

export const Default: Story = {};
