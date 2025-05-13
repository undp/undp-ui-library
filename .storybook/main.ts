import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  managerHead: () => `
    
    <meta charset="utf-8" />

    <title>UNDP design system for react</title>
    <meta name="description" content="Documentation and examples for UNDP design system for react" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="UNDP design system for react" />
    <meta property="og:url" content="https://react.design.undp.org/" />
    <meta property="og:title" content="Documentation | UNDP design system for react" />
    <meta property="og:description" content="Documentation and examples for UNDP design system for react" />
    <meta property="og:image" content="https://react.design.undp.org/Cover.png" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://react.design.undp.org/" />
    <meta name="twitter:title" content="Documentation | UNDP design system for react" />
    <meta name="twitter:description" content="Documentation and examples for UNDP design system for react" />
    <meta name="twitter:image" content="https://react.design.undp.org/Cover.png" />

    <!-- Favicon -->
    <link rel="icon" href="./favicon.ico" />
  `,
};
export default config;
