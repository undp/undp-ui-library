import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Header,
  HeaderLogoUnit,
  HeaderMenuUnit,
  HeaderActions,
  HeaderMainNavUnit,
  Button,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Header>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Header',
  component: Header,
  tags: ['autodocs'],
  render: (_args, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${direction} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Header>
          <HeaderLogoUnit siteName='Data Futures Exchange' siteSubName='UNDP' hyperlink='./' />
          <HeaderMainNavUnit>
            <HeaderMenuUnit>
              <div>Nav 1</div>
              <div>Nav 2</div>
              <div>Nav 3</div>
            </HeaderMenuUnit>
            <HeaderActions>
              <Button>Log in</Button>
            </HeaderActions>
          </HeaderMainNavUnit>
        </Header>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
