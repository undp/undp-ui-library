import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Grid, GridItem } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Grid>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    noOfCol: {
      control: { type: 'object' },
      description:
        'Number of columns, or a responsive object e.g. { base: 1, sm: 2, md: 3, lg: 4, xl: 6, "2xl": 12 }',
    },
    gap: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
  },
  args: {
    noOfCol: { base: 1, sm: 2, md: 3 },
    gap: '16px',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Grid {...args}>
          <GridItem noOfColSpan={{ base: 1, sm: 1, md: 1 }}>
            <div className='h-20 bg-blue-400' />
          </GridItem>
          <GridItem noOfColSpan={{ base: 1, sm: 1, md: 2 }}>
            <div className='h-20 bg-blue-400' />
          </GridItem>
          <GridItem noOfColSpan={{ base: 1, sm: 2, md: 3 }}>
            <div className='h-20 bg-blue-400' />
          </GridItem>
        </Grid>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {};
