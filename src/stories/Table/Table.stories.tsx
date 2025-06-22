import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Table>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Table {...args}>
          <TableHeader>
            <TableRow>
              <TableHead>Header 1</TableHead>
              <TableHead>Header 2</TableHead>
              <TableHead>Header 3</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Row 1, Cell 1</TableCell>
              <TableCell>Row 1, Cell 2</TableCell>
              <TableCell>Row 1, Cell 3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row 2, Cell 1</TableCell>
              <TableCell>Row 2, Cell 2</TableCell>
              <TableCell>Row 2, Cell 3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {};
