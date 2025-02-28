import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, P } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Modal>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'Modal title',
    },
    description: {
      control: { type: 'text' },
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    open: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
    titleClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    footerClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    descriptionClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  args: {
    title: 'Modal title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    footer: <P>This is footer</P>,
  },
  render: ({ ...args }, { globals: { theme } }) => {
    return (
      <div
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Modal {...args}>
          <P>Modal content as ReactNode</P>
        </Modal>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
