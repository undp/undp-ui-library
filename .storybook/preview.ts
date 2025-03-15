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
        
        items: [
          { value: 'en', title: 'English' },
          { value: 'ar', title: 'Arabic' },
          { value: 'az', title: 'Azerbaijani' },
          { value: 'bn', title: 'Bangla' },
          { value: 'my', title: 'Burmese' },
          { value: 'zh', title: 'Chinese' },
          { value: 'cy', title: 'Cyrillic (Russian, Ukrainian etc.)' },
          { value: 'he', title: 'Hebrew' },
          { value: 'hi', title: 'Hindi' },
          { value: 'jp', title: 'Japanese' },
          { value: 'ka', title: 'Georgian' },
          { value: 'km', title: 'Khmer' },
          { value: 'ko', title: 'Korean' },
          { value: 'ne', title: 'Nepali' },
        ],
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
