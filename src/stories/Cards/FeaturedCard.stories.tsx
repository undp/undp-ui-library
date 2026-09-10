import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import {
  Button,
  FeaturedCard,
  FeaturedCardDescription,
  FeaturedCardFooter,
  FeaturedCardTag,
  FeaturedCardTitle,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof FeaturedCard>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Cards/Featured Card',
  component: FeaturedCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: [
        'transparent',
        'background',
        'background-soft',
        'foreground',
        'foreground-soft',
        'surface',
        'surface-xl',
        'surface-2xl',
        'surface-3xl',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'error',
        'info',
        'warning',

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
      defaultValue: { summary: 'white' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: { summary: 'base' },
    },
  },
  args: {
    backgroundColor: 'background',
    size: 'base',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <FeaturedCard {...args}>
          <FeaturedCardTag>Content tag</FeaturedCardTag>
          <FeaturedCardTitle>Lorem ipsum dolor sit amet</FeaturedCardTitle>
          <FeaturedCardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu sagittis
            facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </FeaturedCardDescription>
          <FeaturedCardFooter>
            <Button variant='link' padding='none'>
              Read more
            </Button>
          </FeaturedCardFooter>
        </FeaturedCard>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FeaturedCard>;

export const Default: Story = {};
