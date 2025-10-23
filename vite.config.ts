import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from '@nabla/vite-plugin-eslint';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from '@tailwindcss/vite';

const entries = {
  index: path.resolve(__dirname, 'src/index.ts'),
  Accordion: path.resolve(__dirname, 'src/components/ui/accordion.tsx'),
  Badge: path.resolve(__dirname, 'src/components/ui/badge.tsx'),
  Banner: path.resolve(__dirname, 'src/components/ui/banner.tsx'),
  Breadcrumb: path.resolve(__dirname, 'src/components/ui/breadcrumb.tsx'),
  Button: path.resolve(__dirname, 'src/components/ui/button.tsx'),
  Card: path.resolve(__dirname, 'src/components/ui/Cards/card.tsx'),
  PageWideCard: path.resolve(__dirname, 'src/components/ui/Cards/cardPageWide.tsx'),
  PageHeader: path.resolve(__dirname, 'src/components/ui/pageHeader.tsx'),
  Carousel: path.resolve(__dirname, 'src/components/ui/carousel.tsx'),
  Checkbox: path.resolve(__dirname, 'src/components/ui/checkbox.tsx'),
  CheckboxGroup: path.resolve(__dirname, 'src/components/ui/checkbox-group.tsx'),
  Container: path.resolve(__dirname, 'src/components/ui/container.tsx'),
  DropdownMenu: path.resolve(__dirname, 'src/components/ui/dropdown-menu.tsx'),
  DropdownSelect: path.resolve(__dirname, 'src/components/ui/select.tsx'),
  FileUpload: path.resolve(__dirname, 'src/components/ui/fileUpload.tsx'),
  Footer: path.resolve(__dirname, 'src/components/ui/footer.tsx'),
  Header: path.resolve(__dirname, 'src/components/ui/header.tsx'),
  HoverCard: path.resolve(__dirname, 'src/components/ui/hover-card.tsx'),
  Search: path.resolve(__dirname, 'src/components/ui/input-search.tsx'),
  Input: path.resolve(__dirname, 'src/components/ui/input.tsx'),
  Label: path.resolve(__dirname, 'src/components/ui/label.tsx'),
  LanguageSwitcher: path.resolve(__dirname, 'src/components/ui/LanguageSwitcher/index.tsx'),
  List: path.resolve(__dirname, 'src/components/ui/list.tsx'),
  UNDPLogo: path.resolve(__dirname, 'src/components/ui/logo.tsx'),
  Modal: path.resolve(__dirname, 'src/components/ui/modal.tsx'),
  MarkdownRenderer: path.resolve(__dirname, 'src/components/ui/md-renderer.tsx'),
  Pagination: path.resolve(__dirname, 'src/components/ui/Pagination/index.tsx'),
  Popover: path.resolve(__dirname, 'src/components/ui/popover.tsx'),
  RadioGroup: path.resolve(__dirname, 'src/components/ui/radio-group.tsx'),
  SdgBorder: path.resolve(__dirname, 'src/components/ui/sdgBorder.tsx'),
  SDGIcons: path.resolve(__dirname, 'src/components/ui/sdgIcons.tsx'),
  SegmentedControl: path.resolve(__dirname, 'src/components/ui/segmentedControl.tsx'),
  Separator: path.resolve(__dirname, 'src/components/ui/separator.tsx'),
  Sidebar: path.resolve(__dirname, 'src/components/ui/sidebar-nav.tsx'),
  SliderUI: path.resolve(__dirname, 'src/components/ui/slider.tsx'),
  Spacer: path.resolve(__dirname, 'src/components/ui/spacer.tsx'),
  Spinner: path.resolve(__dirname, 'src/components/ui/spinner.tsx'),
  Stepper: path.resolve(__dirname, 'src/components/ui/stepper.tsx'),
  Switch: path.resolve(__dirname, 'src/components/ui/switch.tsx'),
  Table: path.resolve(__dirname, 'src/components/ui/table.tsx'),
  Tabs: path.resolve(__dirname, 'src/components/ui/tabs.tsx'),
  Textarea: path.resolve(__dirname, 'src/components/ui/textarea.tsx'),
  Toaster: path.resolve(__dirname, 'src/components/ui/toaster.tsx'),
  ToasterHooks: path.resolve(__dirname, 'src/hooks/use-toast.ts'),
  Tooltip: path.resolve(__dirname, 'src/components/ui/tooltip.tsx'),
  Typography: path.resolve(__dirname, 'src/components/ui/typography.tsx'),
  Cite: path.resolve(__dirname, 'src/components/ui/typography.tsx'),
  Code: path.resolve(__dirname, 'src/components/ui/typography.tsx'),
  Blockquote: path.resolve(__dirname, 'src/components/ui/typography.tsx'),
  VizCarousel: path.resolve(__dirname, 'src/components/ui/vizCarousel.tsx'),
  VisualizationWidget: path.resolve(__dirname, 'src/components/ui/visualization-widget.tsx'),
  Drawer: path.resolve(__dirname, 'src/components/ui/drawer.tsx'),
  SDGCardButton: path.resolve(__dirname, 'src/components/ui/sdgCardButton.tsx'),
  cn: path.resolve(__dirname, 'src/lib/utils.ts'),
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  const plugins = [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    eslint(),
    tailwindcss(),
    dts({
      include: ['src/'],
      exclude: ['**/*.mdx', '**/*.test.tsx', 'stories'],
      rollupTypes: true,
    }),
    visualizer({ filename: 'stats.html', open: true }),
  ];
  return {
    plugins,
    build: {
      cssCodeSplit: false,
      lib: {
        entry: entries,
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => {
          if (format === 'cjs') return `${entryName}.cjs`; // CJS uses .cjs
          return `${entryName}.js`; // ESM uses .js
        },
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react-markdown'],
        output: {
          manualChunks: undefined,
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
