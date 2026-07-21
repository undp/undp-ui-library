import { type ReactNode, useEffect } from 'react';

type SemanticGroup = {
  base?: string;
  hover?: string;
  light?: string;
};

type SurfaceScale = {
  base?: string;
  hover?: string;
  hard?: string;
  hardHover?: string;
  '2xs'?: string;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  '3xl'?: string;
  '4xl'?: string;
};

type StrokeScale = {
  base?: string;
  hover?: string;
  '2xs'?: string;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  '3xl'?: string;
  '4xl'?: string;
};

type ContentScale = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  quaternary?: string;
  placeholder?: string;
  disabled?: string;
  reverse?: string;
};

type HeadingSizeScale = {
  base?: string;
  sm?: string;
  xs?: string;
};

type BlueScale = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
};

type GrayScale = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  530?: string;
  560?: string;
  600?: string;
  700?: string;
};

type AccentScale = {
  200?: string;
  400?: string;
  600?: string;
};

type TypographyScale = {
  h1?: HeadingSizeScale;
  h2?: HeadingSizeScale;
  h3?: HeadingSizeScale;
  h4?: HeadingSizeScale;
  h5?: HeadingSizeScale;
  h6?: HeadingSizeScale;
  p?: HeadingSizeScale;
  '2xl'?: string;
  xl?: string;
  lg?: string;
  base?: string;
  sm?: string;
  xs?: string;
  '2xs'?: string;
};

type LeadingScale = {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  h6?: string;
  p?: string;
  '2xl'?: string;
  xl?: string;
  lg?: string;
  base?: string;
  sm?: string;
  xs?: string;
};

type RoundedScale = {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
};

interface ConfigDataType {
  blue?: BlueScale;
  gray?: GrayScale;
  yellow?: AccentScale;
  red?: AccentScale;
  green?: AccentScale;
  azure?: AccentScale;

  foreground?: string;
  foregroundSoft?: string;
  background?: string;
  backgroundSoft?: string;
  ring?: string;

  error?: SemanticGroup;
  warning?: SemanticGroup;
  success?: SemanticGroup;
  info?: SemanticGroup;
  primary?: SemanticGroup;
  secondary?: SemanticGroup;
  tertiary?: SemanticGroup;
  quaternary?: SemanticGroup;

  content?: ContentScale;
  surface?: SurfaceScale;
  stroke?: StrokeScale;

  opacityDisabled?: string;

  fonts?: {
    body?: string;
    heading?: string;
    sans?: string;
    mono?: string;
    serif?: string;
  };

  typography?: TypographyScale;
  leading?: LeadingScale;

  rounded?: RoundedScale;

  blurFrosted?: string;
}

interface ConfigProviderProps {
  children: ReactNode;
  config?: ConfigDataType;
  theme?: 'dark' | 'light';
  rtl?: boolean;
}

const setVar = (root: HTMLElement, name: string, value?: string) => {
  if (value !== undefined) root.style.setProperty(name, value);
};

const setSemanticGroup = (root: HTMLElement, name: string, group?: SemanticGroup) => {
  if (!group) return;
  setVar(root, `--${name}`, group.base);
  setVar(root, `--${name}-hover`, group.hover);
  setVar(root, `--${name}-light`, group.light);
};

const setAccentGroup = (root: HTMLElement, name: string, group?: AccentScale) => {
  if (!group) return;
  setVar(root, `--${name}-200`, group['200']);
  setVar(root, `--${name}-400`, group['400']);
  setVar(root, `--${name}-600`, group['600']);
};

export const ConfigProvider = ({ children, config, rtl }: ConfigProviderProps) => {
  useEffect(() => {
    if (config) {
      const root = document.documentElement;

      setVar(root, '--blue-100', config.blue?.['100']);
      setVar(root, '--blue-200', config.blue?.['200']);
      setVar(root, '--blue-300', config.blue?.['300']);
      setVar(root, '--blue-400', config.blue?.['400']);
      setVar(root, '--blue-500', config.blue?.['500']);
      setVar(root, '--blue-600', config.blue?.['600']);
      setVar(root, '--blue-700', config.blue?.['700']);

      setVar(root, '--gray-100', config.gray?.['100']);
      setVar(root, '--gray-200', config.gray?.['200']);
      setVar(root, '--gray-300', config.gray?.['300']);
      setVar(root, '--gray-400', config.gray?.['400']);
      setVar(root, '--gray-500', config.gray?.['500']);
      setVar(root, '--gray-530', config.gray?.['530']);
      setVar(root, '--gray-560', config.gray?.['560']);
      setVar(root, '--gray-600', config.gray?.['600']);
      setVar(root, '--gray-700', config.gray?.['700']);

      setAccentGroup(root, 'blue', config.blue);
      setAccentGroup(root, 'gray', config.gray);
      setAccentGroup(root, 'yellow', config.yellow);
      setAccentGroup(root, 'red', config.red);
      setAccentGroup(root, 'green', config.green);
      setAccentGroup(root, 'azure', config.azure);

      setSemanticGroup(root, 'error', config.error);
      setSemanticGroup(root, 'warning', config.warning);
      setSemanticGroup(root, 'success', config.success);
      setSemanticGroup(root, 'info', config.info);
      setSemanticGroup(root, 'primary', config.primary);
      setSemanticGroup(root, 'secondary', config.secondary);
      setSemanticGroup(root, 'tertiary', config.tertiary);
      setSemanticGroup(root, 'quaternary', config.quaternary);

      setVar(root, '--content-primary', config.content?.primary);
      setVar(root, '--content-secondary', config.content?.secondary);
      setVar(root, '--content-tertiary', config.content?.tertiary);
      setVar(root, '--content-quaternary', config.content?.quaternary);
      setVar(root, '--content-placeholder', config.content?.placeholder);
      setVar(root, '--content-disabled', config.content?.disabled);
      setVar(root, '--content-reverse', config.content?.reverse);

      setVar(root, '--surface', config.surface?.base);
      setVar(root, '--surface-hover', config.surface?.hover);
      setVar(root, '--surface-hard', config.surface?.hard);
      setVar(root, '--surface-hard-hover', config.surface?.hardHover);
      setVar(root, '--surface-2xs', config.surface?.['2xs']);
      setVar(root, '--surface-xs', config.surface?.xs);
      setVar(root, '--surface-sm', config.surface?.sm);
      setVar(root, '--surface-md', config.surface?.md);
      setVar(root, '--surface-lg', config.surface?.lg);
      setVar(root, '--surface-xl', config.surface?.xl);
      setVar(root, '--surface-2xl', config.surface?.['2xl']);
      setVar(root, '--surface-3xl', config.surface?.['3xl']);
      setVar(root, '--surface-4xl', config.surface?.['4xl']);

      setVar(root, '--stroke', config.stroke?.base);
      setVar(root, '--stroke-hover', config.stroke?.hover);
      setVar(root, '--stroke-2xs', config.stroke?.['2xs']);
      setVar(root, '--stroke-xs', config.stroke?.xs);
      setVar(root, '--stroke-sm', config.stroke?.sm);
      setVar(root, '--stroke-md', config.stroke?.md);
      setVar(root, '--stroke-lg', config.stroke?.lg);
      setVar(root, '--stroke-xl', config.stroke?.xl);
      setVar(root, '--stroke-2xl', config.stroke?.['2xl']);
      setVar(root, '--stroke-3xl', config.stroke?.['3xl']);
      setVar(root, '--stroke-4xl', config.stroke?.['4xl']);

      setVar(root, '--font-body', config.fonts?.body);
      setVar(root, '--font-sans', config.fonts?.sans);
      setVar(root, '--font-heading', config.fonts?.heading);
      setVar(root, '--font-mono', config.fonts?.mono);
      setVar(root, '--font-serif', config.fonts?.serif);

      setVar(root, '--foreground', config.foreground);
      setVar(root, '--foreground-soft', config.foregroundSoft);
      setVar(root, '--background', config.background);
      setVar(root, '--background-soft', config.backgroundSoft);
      setVar(root, '--ring', config.ring);

      setVar(root, '--opacity-disabled', config.opacityDisabled);

      (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const).forEach((heading) => {
        const sizes = config.typography?.[heading];
        setVar(root, `--text-${heading}`, sizes?.base);
        setVar(root, `--text-${heading}-sm`, sizes?.sm);
        setVar(root, `--text-${heading}-xs`, sizes?.xs);
      });
      setVar(root, '--text-2xl', config.typography?.['2xl']);
      setVar(root, '--text-xl', config.typography?.xl);
      setVar(root, '--text-lg', config.typography?.lg);
      setVar(root, '--text-base', config.typography?.base);
      setVar(root, '--text-sm', config.typography?.sm);
      setVar(root, '--text-xs', config.typography?.xs);
      setVar(root, '--text-2xs', config.typography?.['2xs']);

      setVar(root, '--leading-h1', config.leading?.h1);
      setVar(root, '--leading-h2', config.leading?.h2);
      setVar(root, '--leading-h3', config.leading?.h3);
      setVar(root, '--leading-h4', config.leading?.h4);
      setVar(root, '--leading-h5', config.leading?.h5);
      setVar(root, '--leading-h6', config.leading?.h6);
      setVar(root, '--leading-p', config.leading?.p);
      setVar(root, '--leading-2xl', config.leading?.['2xl']);
      setVar(root, '--leading-xl', config.leading?.xl);
      setVar(root, '--leading-lg', config.leading?.lg);
      setVar(root, '--leading-base', config.leading?.base);
      setVar(root, '--leading-sm', config.leading?.sm);
      setVar(root, '--leading-xs', config.leading?.xs);

      setVar(root, '--rounded-base', config.rounded?.base);
      setVar(root, '--rounded-sm', config.rounded?.sm);
      setVar(root, '--rounded-md', config.rounded?.md);
      setVar(root, '--rounded-lg', config.rounded?.lg);
      setVar(root, '--rounded-xl', config.rounded?.xl);
      setVar(root, '--rounded-2xl', config.rounded?.['2xl']);

      setVar(root, '--blur-frosted', config.blurFrosted);
    }
  }, [config]);

  return <div dir={rtl ? 'rtl' : undefined}>{children}</div>;
};
