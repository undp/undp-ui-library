import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  H1,
  H3,
  PageHeader,
  PageHeaderContent,
  PageHeaderHead,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof PageHeader>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Page header',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    backgroundImage: { control: { type: 'text' } },
    minHeight: {
      control: { type: 'inline-radio' },
      options: [true, false],
      defaultValue: { summary: false },
    },
    contentMode: {
      control: { type: 'inline-radio' },
      options: ['dark', 'light'],
      defaultValue: { summary: 'dark' },
    },
  },
  args: {
    backgroundImage: 'https://design.undp.org/static/media/herooption.6baa1d2d.jpg',
    minHeight: false,
    contentMode: 'dark',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <PageHeader {...args}>
          <PageHeaderHead>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href='/docs/components'>Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbEllipsis />
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </PageHeaderHead>
          <PageHeaderContent>
            <H1>Page title</H1>
            <H3>This is a subtitle</H3>
          </PageHeaderContent>
        </PageHeader>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};
