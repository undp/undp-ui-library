import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';
import { HeaderMenuDropdown, HeaderMenuLink } from '@/components/ui/header';
import {
  Button,
  Header,
  HeaderActions,
  HeaderLogoUnit,
  HeaderMainNavUnit,
  HeaderMenuUnit,
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
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Header>
          <HeaderLogoUnit hyperlink='./' siteName='Data Futures Exchange' siteSubName='UNDP' />
          <HeaderMainNavUnit>
            <HeaderMenuUnit>
              <HeaderMenuLink>Nav 1</HeaderMenuLink>
              <HeaderMenuLink>Nav 2</HeaderMenuLink>
              <HeaderMenuLink>Nav 3</HeaderMenuLink>
              <HeaderMenuDropdown
                label='Nav 4'
                items={[
                  {
                    label: 'Page 1',
                  },
                  {
                    label: 'Page 2',
                  },
                  {
                    label: 'Page 3',
                  },
                ]}
              />
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
