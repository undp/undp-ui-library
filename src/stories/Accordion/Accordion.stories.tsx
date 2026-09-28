import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Accordion>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
      defaultValue: { summary: 'primary' },
    },
    collapsible: {
      control: { type: 'inline-radio' },
      options: [true, false],
      defaultValue: { summary: false },
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'foreground',
        'surface',
        'error',
        'warning',
        'info',
        'success',
        'male',
        'female',
        'urban',
        'rural',
        'child',
        'adolescent',
        'young-adult',
        'adult',
        'older-adult',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'teal',
        'azure',
        'blue',
        'violet',
        'pink',
        'sdg-1',
        'sdg-2',
        'sdg-3',
        'sdg-4',
        'sdg-5',
        'sdg-6',
        'sdg-7',
        'sdg-8',
        'sdg-9',
        'sdg-10',
        'sdg-11',
        'sdg-12',
        'sdg-13',
        'sdg-14',
        'sdg-15',
        'sdg-16',
        'sdg-17',
      ],
      defaultValue: { summary: 'primary' },
    },
    type: {
      control: { type: 'inline-radio' },
      options: ['single', 'multiple'],
      defaultValue: { summary: 'single' },
    },
  },
  args: {
    variant: 'primary',
    collapsible: false,
    type: 'single',
    color: 'primary',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Accordion {...args}>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you prefer.
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
