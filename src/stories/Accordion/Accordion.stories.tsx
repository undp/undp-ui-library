import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Accordion>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
      defaultValue: 'primary',
    },
    collapsible: {
      control: { type: 'inline-radio' },
      options: [true, false],
      defaultValue: false,
    },
    type: {
      control: { type: 'inline-radio' },
      options: ['single', 'multiple'],
      defaultValue: 'single',
    },
  },
  render: ({ ...args }, { globals: { theme } }) => {
    return (
      <div
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Accordion {...args}>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};
