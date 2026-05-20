import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Footer,
  FooterLogoUnit,
  FooterCopyrightUnit,
  FooterMainNavUnit,
  FooterContent,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Footer>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Footer',
  component: Footer,
  tags: ['autodocs'],
  render: (_args, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Footer>
          <FooterContent>
            <FooterLogoUnit>subscribe to email</FooterLogoUnit>
            <FooterMainNavUnit>
              <div>Navigation unit comes here</div>
            </FooterMainNavUnit>
            <FooterCopyrightUnit>Footnote can be added here</FooterCopyrightUnit>
          </FooterContent>
        </Footer>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
