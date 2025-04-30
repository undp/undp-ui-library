import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

function removeFonts() {
  return {
    name: 'remove-fonts',
    enforce: 'post', // Ensure it runs after Vite's default asset handling
    generateBundle(_options, bundle) {
      for (const name in bundle) {
        if (/\.(woff|woff2|eot|ttf|otf)$/i.test(name)) {
          delete bundle[name];
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';

  const plugins = [dts({ rollupTypes: true }), react(), eslint(), tailwindcss()];

  // Only include removeFonts plugin when building for production
  if (isProduction) {
    plugins.push(removeFonts());
  }
  return {
    plugins,
    build: {
      cssCodeSplit: false,
      lib: {
        entry: 'src/index.ts',
        name: 'undpDesignSystem',
        fileName: format => {
          if (format === 'es') return 'index.js'; // ES Module
          if (format === 'cjs') return 'index.cjs'; // CommonJS Module
          return 'index.umd.js'; // UMD Module
        },
        formats: ['es', 'cjs', 'umd'],
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          assetFileNames: assetInfo => {
            if (assetInfo.names && assetInfo.names.includes('design-system-react.css')) {
              return 'style.css';
            }
            return 'assets/[name][extname]';
          },
        },
      },
      sourcemap: true,
      emptyOutDir: true,
    },
    server: {
      cors: {
        origin: '*',
        methods: ['GET'],
        preflightContinue: false,
        optionsSuccessStatus: 204,
      },
    },
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  };
});
