import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { LanguageSwitcher } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof LanguageSwitcher>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Language Select',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  args: {
    options: [
      {
        label: 'English',
        id: 'en',
      },
      {
        label: 'French',
        id: 'fr',
      },
      {
        label: 'Spanish',
        id: 'es',
      },
    ],
    defaultValue: 'en',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <LanguageSwitcher
          {...args}
          onValueChange={d => {
            // eslint-disable-next-line no-console
            console.log('Change:', d);
          }} 
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {};
