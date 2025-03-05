import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
    direction: {
      description: 'Direction',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Direction',
        icon: 'mirror',
        // Array of plain string values or MenuItem shape (see below)
        items: ['ltr', 'rtl' ],
        // Change title based on selected value
        dynamicTitle: true,
        default: 'ltr'
      },
    },
    language: {
      description: 'Language',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Language',
        icon: 'globe',
        // Array of plain string values or MenuItem shape (see below)
        items: ['ar', 'ch-traditional', 'ch-simplified', 'en', 'jp', 'mm', 'ua'],
        // Change title based on selected value
        dynamicTitle: true,
        default: 'en'
      },
    }
  },
  initialGlobals: {
    theme: 'light',
  },
};

export default preview;
