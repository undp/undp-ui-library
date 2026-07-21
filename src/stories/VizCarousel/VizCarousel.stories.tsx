import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

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
    autoScroll: {
      control: 'text',
      table: {
        type: {
          summary: 'boolean | number',
        },
      },
    },
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
        viz: <div className='h-full min-h-[320px] w-full bg-surface-sm' />,
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
        viz: <div className='h-full w-full bg-surface-lg' />,
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
        viz: <div className='h-full w-full bg-surface-sm' />,
      },
    ],
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
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
