import { create } from 'storybook/theming';

export const customTheme = create({
  base:
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  brandTitle: 'UNDP Design system for React',
  brandUrl: 'https://www.undp.org/',
  brandImage:
    'https://cdn.jsdelivr.net/npm/@undp/design-system-assets@1.6.1/images/undp-logo-blue.svg',
});
