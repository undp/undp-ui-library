import type { Meta, StoryObj } from '@storybook/react';
import {
  Avatar,
  AvatarFallback,
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from '@/index';

const meta: Meta<React.ComponentProps<typeof Message>> = {
  title: 'Components/Message',
  component: Message,
  argTypes: {
    align: {
      control: 'radio',
      options: ['start', 'end'],
    },
  },
  args: {
    align: 'start',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`flex min-h-32 items-center justify-center p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <MessageGroup>
          <Message {...args}>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </MessageAvatar>

            <MessageContent>
              <MessageHeader>John Doe</MessageHeader>

              <div className='rounded-lg bg-surface px-3 py-2'>Hello! How are you doing today?</div>
            </MessageContent>
          </Message>
        </MessageGroup>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
