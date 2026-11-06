import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const entries = {
  index: path.resolve(import.meta.dirname, 'src/index.ts'),

  Accordion: path.resolve(import.meta.dirname, 'src/components/ui/accordion.tsx'),
  AnimatedIcons: path.resolve(import.meta.dirname, 'src/components/icons/animated-icons.tsx'),
  Attachment: path.resolve(import.meta.dirname, 'src/components/ui/attachment.tsx'),
  Avatar: path.resolve(import.meta.dirname, 'src/components/ui/avatar.tsx'),
  Badge: path.resolve(import.meta.dirname, 'src/components/ui/badge.tsx'),
  Banner: path.resolve(import.meta.dirname, 'src/components/ui/banner.tsx'),
  Breadcrumb: path.resolve(import.meta.dirname, 'src/components/ui/breadcrumb.tsx'),
  Bubble: path.resolve(import.meta.dirname, 'src/components/ui/bubble.tsx'),
  Button: path.resolve(import.meta.dirname, 'src/components/ui/button.tsx'),
  Calendar: path.resolve(import.meta.dirname, 'src/components/ui/calendar-card.tsx'),
  Card: path.resolve(import.meta.dirname, 'src/components/ui/card.tsx'),
  Carousel: path.resolve(import.meta.dirname, 'src/components/ui/carousel.tsx'),
  Checkbox: path.resolve(import.meta.dirname, 'src/components/ui/checkbox.tsx'),
  CheckboxGroup: path.resolve(import.meta.dirname, 'src/components/ui/checkbox-group.tsx'),
  Container: path.resolve(import.meta.dirname, 'src/components/ui/container.tsx'),
  DatePicker: path.resolve(import.meta.dirname, 'src/components/ui/date-picker.tsx'),
  DateRangePicker: path.resolve(import.meta.dirname, 'src/components/ui/date-range-picker.tsx'),
  DateTimePicker: path.resolve(import.meta.dirname, 'src/components/ui/date-time-picker.tsx'),
  DateTimeRangePicker: path.resolve(
    import.meta.dirname,
    'src/components/ui/date-time-range-picker.tsx',
  ),
  Drawer: path.resolve(import.meta.dirname, 'src/components/ui/drawer.tsx'),
  DropdownMenu: path.resolve(import.meta.dirname, 'src/components/ui/dropdown-menu.tsx'),
  DropdownSelect: path.resolve(import.meta.dirname, 'src/components/ui/select.tsx'),
  FeaturedCard: path.resolve(import.meta.dirname, 'src/components/ui/featured-card.tsx'),
  FeatureShowcase: path.resolve(import.meta.dirname, 'src/components/ui/feature-showcase.tsx'),
  FileUpload: path.resolve(import.meta.dirname, 'src/components/ui/file-upload.tsx'),
  Footer: path.resolve(import.meta.dirname, 'src/components/ui/footer.tsx'),
  Grid: path.resolve(import.meta.dirname, 'src/components/ui/grid.tsx'),
  Header: path.resolve(import.meta.dirname, 'src/components/ui/header.tsx'),
  HoverCard: path.resolve(import.meta.dirname, 'src/components/ui/hover-card.tsx'),
  Input: path.resolve(import.meta.dirname, 'src/components/ui/input.tsx'),
  InputGroup: path.resolve(import.meta.dirname, 'src/components/ui/input-group.tsx'),
  Label: path.resolve(import.meta.dirname, 'src/components/ui/label.tsx'),
  LanguageSwitcher: path.resolve(
    import.meta.dirname,
    'src/components/ui/language-switcher/index.tsx',
  ),
  List: path.resolve(import.meta.dirname, 'src/components/ui/list.tsx'),
  MarkdownRenderer: path.resolve(import.meta.dirname, 'src/components/ui/md-renderer.tsx'),
  Marker: path.resolve(import.meta.dirname, 'src/components/ui/marker.tsx'),
  Message: path.resolve(import.meta.dirname, 'src/components/ui/message.tsx'),
  MessageScroller: path.resolve(import.meta.dirname, 'src/components/ui/message-scroller.tsx'),
  Modal: path.resolve(import.meta.dirname, 'src/components/ui/modal.tsx'),
  NavigationMenu: path.resolve(import.meta.dirname, 'src/components/ui/navigation-menu.tsx'),
  PageHeader: path.resolve(import.meta.dirname, 'src/components/ui/page-header.tsx'),
  PageWideCard: path.resolve(import.meta.dirname, 'src/components/ui/card-page-wide.tsx'),
  Pagination: path.resolve(import.meta.dirname, 'src/components/ui/Pagination/index.tsx'),
  Popover: path.resolve(import.meta.dirname, 'src/components/ui/popover.tsx'),
  RadioGroup: path.resolve(import.meta.dirname, 'src/components/ui/radio-group.tsx'),
  ResourceCard: path.resolve(import.meta.dirname, 'src/components/ui/resource-card.tsx'),
  SDGBorder: path.resolve(import.meta.dirname, 'src/components/ui/sdg-border.tsx'),
  SDGCardButton: path.resolve(import.meta.dirname, 'src/components/ui/sdg-card-button.tsx'),
  SDGIcons: path.resolve(import.meta.dirname, 'src/components/ui/sdg-icons.tsx'),
  Search: path.resolve(import.meta.dirname, 'src/components/ui/input-search.tsx'),
  SegmentedControl: path.resolve(import.meta.dirname, 'src/components/ui/segmented-control.tsx'),
  Separator: path.resolve(import.meta.dirname, 'src/components/ui/separator.tsx'),
  Sidebar: path.resolve(import.meta.dirname, 'src/components/ui/sidebar-nav.tsx'),
  SliderUI: path.resolve(import.meta.dirname, 'src/components/ui/slider.tsx'),
  Spacer: path.resolve(import.meta.dirname, 'src/components/ui/spacer.tsx'),
  Spinner: path.resolve(import.meta.dirname, 'src/components/ui/spinner.tsx'),
  StatCard: path.resolve(import.meta.dirname, 'src/components/ui/stat-card.tsx'),
  StatsPanel: path.resolve(import.meta.dirname, 'src/components/ui/stats-panel.tsx'),
  Stepper: path.resolve(import.meta.dirname, 'src/components/ui/stepper.tsx'),
  Switch: path.resolve(import.meta.dirname, 'src/components/ui/switch.tsx'),
  Table: path.resolve(import.meta.dirname, 'src/components/ui/table.tsx'),
  Tabs: path.resolve(import.meta.dirname, 'src/components/ui/tabs.tsx'),
  Textarea: path.resolve(import.meta.dirname, 'src/components/ui/textarea.tsx'),
  Toaster: path.resolve(import.meta.dirname, 'src/components/ui/toaster.tsx'),
  ToasterHooks: path.resolve(import.meta.dirname, 'src/hooks/use-toast.ts'),
  Tooltip: path.resolve(import.meta.dirname, 'src/components/ui/tooltip.tsx'),
  Typography: path.resolve(import.meta.dirname, 'src/components/ui/typography.tsx'),
  UNDPLogo: path.resolve(import.meta.dirname, 'src/components/ui/logo.tsx'),
  VisualizationWidget: path.resolve(
    import.meta.dirname,
    'src/components/ui/visualization-widget.tsx',
  ),
  VizCarousel: path.resolve(import.meta.dirname, 'src/components/ui/viz-carousel.tsx'),

  cn: path.resolve(import.meta.dirname, 'src/lib/utils.ts'),
  ConfigProvider: path.resolve(import.meta.dirname, 'src/ConfigProvider.tsx'),
};
// https://vitejs.dev/config/
export default defineConfig(() => {
  const plugins = [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [{ src: 'src/styles/*', dest: 'styles', rename: { stripBase: 2 } }],
    }),
    dts({
      include: ['src/'],
      entryRoot: 'src',
      tsconfigPath: './tsconfig.json',
      staticImport: true,
      insertTypesEntry: true,
      bundleTypes: true,
      exclude: ['**/*.mdx', '**/*.test.tsx', 'stories'],
    }),
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
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        input: entries,
        external: ['react', 'react-dom', 'react-markdown', 'react/jsx-runtime'],
        output: {
          manualChunks: undefined,
          externalLiveBindings: false,
          exports: 'named',
          assetFileNames: (assetInfo) => {
            if (assetInfo.names?.includes('design-system-react.css')) {
              return 'style.css';
            }
            return 'assets/[name][extname]';
          },
        },
        treeshake: true,
      },
      sourcemap: true,
    },
    server: {
      cors: {
        origin: '*',
        methods: ['GET'],
        preflightContinue: false,
        optionsSuccessStatus: 204,
      },
    },
    resolve: { alias: { '@': path.resolve(import.meta.dirname, './src') } },
  };
});
