import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Banner, BannerBody, BannerBodyContent, BannerBodySidebar, H3, P } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Banner>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Banner',
  component: Banner,
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
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'warning',
        'error',
        'info',

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
      ],
      defaultValue: { summary: 'transparent' },
    },
    padding: {
      control: { type: 'select' },
      options: ['none', '2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: { summary: 'base' },
    },
    bodyMaxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: { summary: 'full' },
    },
    bodyGap: {
      control: { type: 'select' },
      options: ['none', '2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: { summary: 'base' },
    },
    sidebarWidth: {
      control: { type: 'select' },
      options: ['sm', 'base', 'lg', 'full'],
      defaultValue: { summary: 'base' },
    },
  },
  args: {
    backgroundColor: 'transparent',
    padding: 'base',
    bodyMaxWidth: 'full',
    bodyGap: 'base',
    sidebarWidth: 'base',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Banner {...args}>
          <BannerBody>
            <BannerBodySidebar>
              <H3>Title</H3>
            </BannerBodySidebar>
            <BannerBodyContent>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu
                sagittis facilisis. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </P>
            </BannerBodyContent>
          </BannerBody>
        </Banner>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {};
