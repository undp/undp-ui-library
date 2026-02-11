import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChartBar } from 'lucide-react';

import {
  VisualizationWidget,
  VisualizationWidgetHeader,
  VisualizationWidgetHeaderItem,
  VisualizationWidgetBody,
  VisualizationWidgetBodySidebar,
  VisualizationWidgetBodyContent,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof VisualizationWidgetHeader>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Visualization Widget',
  component: VisualizationWidgetHeader,
  tags: ['autodocs'],
  args: { defaultValue: 'chart 1' },
  argTypes: {
    defaultValue: { control: { type: 'text' } },
    activeItemClass: { control: { type: 'text' } },
    hoverItemClass: { control: { type: 'text' } },
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => (
    <div
      dir={direction}
      className={`p-4 ${theme} ${language} ${
        theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
      }`}
    >
      <VisualizationWidget>
        <VisualizationWidgetHeader
          onChange={d => {
            // eslint-disable-next-line no-console
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
            <div className='h-96 bg-primary-gray-300 w-full dark:bg-primary-gray-700' />
          </VisualizationWidgetBodyContent>
        </VisualizationWidgetBody>
      </VisualizationWidget>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof VisualizationWidget>;

export const Default: Story = {};
