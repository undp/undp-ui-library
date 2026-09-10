import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartBar } from 'lucide-react';
import type React from 'react';

import {
  VisualizationWidget,
  VisualizationWidgetBody,
  VisualizationWidgetBodyContent,
  VisualizationWidgetBodySidebar,
  VisualizationWidgetHeader,
  VisualizationWidgetHeaderItem,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof VisualizationWidgetHeader>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Visualization Widget',
  component: VisualizationWidgetHeader,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: { type: 'text' } },
    activeItemClass: { control: { type: 'text' } },
    hoverItemClass: { control: { type: 'text' } },
    color: {
      control: { type: 'inline-radio' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'foreground',
        'surface',

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

        'male',
        'female',
        'urban',
        'rural',
        'child',
        'adolescent',
        'young-adult',
        'adult',
        'older-adult',
      ],
      defaultValue: { summary: 'primary' },
    },
  },
  args: {
    color: 'primary',
    defaultValue: 'chart 1',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => (
    <div
      dir={direction}
      className={`p-4 ${theme} ${language} ${
        theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
      }`}
    >
      <VisualizationWidget>
        <VisualizationWidgetHeader
          onChange={(d) => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
            console.log(d);
          }}
          {...args}
        >
          <VisualizationWidgetHeaderItem value='chart 1'>
            <ChartBar />
            Chart 1
          </VisualizationWidgetHeaderItem>
          <VisualizationWidgetHeaderItem value='chart 2'>
            <ChartBar />
            Chart 2
          </VisualizationWidgetHeaderItem>
          <VisualizationWidgetHeaderItem value='chart 3'>
            <ChartBar />
            Chart 3
          </VisualizationWidgetHeaderItem>
        </VisualizationWidgetHeader>
        <VisualizationWidgetBody>
          <VisualizationWidgetBodySidebar collapsible={{ enabled: true, defaultCollapsed: false }}>
            <div className='bg-primary-blue-100' />
          </VisualizationWidgetBodySidebar>
          <VisualizationWidgetBodyContent>
            <div className='h-96 w-full bg-surface-sm dark:bg-surface-2xl' />
          </VisualizationWidgetBodyContent>
        </VisualizationWidgetBody>
      </VisualizationWidget>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof VisualizationWidget>;

export const Default: Story = {};
