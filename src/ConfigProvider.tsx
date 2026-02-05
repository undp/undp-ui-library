import { useEffect, ReactNode } from 'react';

interface ConfigDataType {
  foreground?: string;
  primary?: {
    white?: string;
    black?: string;
  };
  customColors?: {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
  };
  blues?: {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
  };
  grays?: {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    550?: string;
    600?: string;
    650?: string;
    700?: string;
  };
  accents?: {
    'light-yellow'?: string;
    yellow?: string;
    'dark-yellow'?: string;
    'light-red'?: string;
    red?: string;
    'dark-red'?: string;
    'light-green'?: string;
    green?: string;
    'dark-green'?: string;
    'light-azure'?: string;
    azure?: string;
    'dark-azure'?: string;
  };
  fonts?: {
    body?: string;
    heading?: string;
  };
  mode?: 'light' | 'dark';
  rtl?: boolean;
}

interface ConfigProviderProps {
  children: ReactNode;
  config?: ConfigDataType;
}

export const ConfigProvider = ({ children, config }: ConfigProviderProps) => {
  useEffect(() => {
    if (config) {
      const root = document.documentElement;

      // Type-safe way to set CSS variables
      if (config.customColors) {
        Object.entries(config.customColors).forEach(([key, value]) => {
          root.style.setProperty(`--custom-color-${key}`, value);
        });
      }
      if (config.blues) {
        Object.entries(config.blues).forEach(([key, value]) => {
          root.style.setProperty(`--blue-${key}`, value);
        });
      }
      if (config.grays) {
        Object.entries(config.grays).forEach(([key, value]) => {
          root.style.setProperty(`--gray-${key}`, value);
        });
      }
      if (config.accents) {
        Object.entries(config.accents).forEach(([key, value]) => {
          root.style.setProperty(`--${key}`, value);
        });
      }
      if (config.primary) {
        Object.entries(config.primary).forEach(([key, value]) => {
          root.style.setProperty(`--${key}`, value);
        });
      }
      if (config.fonts?.body) {
        root.style.setProperty('--font-sans', config.fonts.body);
      }
      if (config.fonts?.heading) {
        root.style.setProperty('--font-heading', config.fonts.heading);
      }
    }
  }, [config]);

  return (
    <div className={config?.mode === 'dark' ? 'dark' : ''} dir={config?.rtl ? 'rtl' : 'ltr'}>
      {children}
    </div>
  );
};
