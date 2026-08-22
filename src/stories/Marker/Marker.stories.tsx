import type { Meta, StoryObj } from '@storybook/react-vite';
import { Info } from 'lucide-react';
import type React from 'react';
import { Marker, MarkerContent, MarkerIcon } from '@/index';

const meta: Meta<React.ComponentProps<typeof Marker>> = {
  title: 'Components/Marker',
  component: Marker,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'separator', 'border'],
    },
    asChild: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'default',
    asChild: false,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`flex min-h-32 items-center justify-center p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Marker {...args}>
          <MarkerIcon>
            <Info />
          </MarkerIcon>
          <MarkerContent>This is a marker with some supporting information.</MarkerContent>
        </Marker>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
