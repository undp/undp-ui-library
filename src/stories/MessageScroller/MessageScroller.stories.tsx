import type { Meta, StoryObj } from '@storybook/react';
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@/index';

const meta = {
  title: 'Components/MessageScroller',
  component: MessageScroller,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MessageScroller>;

export default meta;

type Story = StoryObj<typeof meta>;

const messages = [
  'Hey! How are you doing?',
  'I’m doing great, thanks!',
  'Have you had a chance to look at the latest design?',
  'Yes, I reviewed it this morning.',
  'What do you think about the new layout?',
  'I really like the direction. The hierarchy feels much clearer now.',
  'Great! I’ll make a few final adjustments.',
  'Sounds good. Let me know when it is ready.',
  'Will do!',
  'Thanks!',
  'No problem!',
  'Talk to you soon.',
];

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider>
      <MessageScroller className='h-100 w-100 border'>
        <MessageScrollerViewport>
          <MessageScrollerContent className='p-4'>
            {messages.map((message) => (
              <MessageScrollerItem key={message}>
                <div className='rounded-lg bg-surface px-3 py-2 text-sm'>{message}</div>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </MessageScrollerProvider>
  ),
};
