import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from '@nabla/vite-plugin-eslint';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const plugins = [
    dts({
      include: ['src/'],
      exclude: ['**/*.mdx', '**/*.test.tsx', 'stories'],
      rollupTypes: true,
    }),
    visualizer({ filename: 'stats.html', open: true }),
    react(),
    eslint(),
    tailwindcss(),
  ];
  return {
    plugins,
    build: {
      cssCodeSplit: false,
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'undpDesignSystem',
        fileName: format => {
          if (format === 'es') return 'index.js'; // ES Module
          if (format === 'cjs') return 'index.cjs'; // CommonJS Module
        },
        formats: ['es', 'cjs'],
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
        treeshake: true,
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
