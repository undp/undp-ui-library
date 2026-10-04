import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import {
  Button,
  ResourceCard,
  ResourceCardContent,
  ResourceCardDescription,
  ResourceCardFooter,
  ResourceCardImage,
  ResourceCardTitle,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof ResourceCard>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Cards/Resource Card',
  component: ResourceCard,
  tags: ['autodocs'],
  render: () => (
    <div className='max-w-sm'>
      <ResourceCard href='#'>
        <ResourceCardImage
          imageSrc='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
          aspectRatio='portrait'
        />

        <ResourceCardContent>
          <ResourceCardTitle>Building resilient communities</ResourceCardTitle>

          <ResourceCardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
            tristique senectus.
          </ResourceCardDescription>
        </ResourceCardContent>
        <ResourceCardFooter className='px-6 pb-6'>
          <Button variant='link' padding='none' endIcon='download'>
            Read more
          </Button>
        </ResourceCardFooter>
      </ResourceCard>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof ResourceCard>;

export const Default: Story = {};
