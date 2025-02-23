import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Footer,
  FooterLogoUnit,
  FooterCopyrightUnit,
  FooterMainNavUnit,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Footer>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Footer',
  component: Footer,
  tags: ['autodocs'],
  render: () => (
    <Footer>
      <FooterLogoUnit>subscribe to email</FooterLogoUnit>
      <FooterMainNavUnit>
        <div>Navigation unit comes here</div>
      </FooterMainNavUnit>
      <FooterCopyrightUnit>Footnote can be added here</FooterCopyrightUnit>
    </Footer>
  ),
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
