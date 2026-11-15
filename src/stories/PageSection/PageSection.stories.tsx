import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { H4, P, PageSection } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof PageSection>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Page Section',
  component: PageSection,
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
        'surface-2xs',
        'surface-xs',
        'surface-sm',
        'surface-md',
        'surface-lg',
        'surface-xl',
        'surface-2xl',
        'surface-3xl',
        'surface-4xl',
      ],
      defaultValue: { summary: 'background' },
    },
  },
  args: {
    backgroundColor: 'background',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <PageSection {...args}>
          <H4>Heading</H4>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu sagittis
            facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </P>
        </PageSection>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof PageSection>;

export const Default: Story = {};
