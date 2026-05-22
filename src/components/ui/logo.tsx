function UNDPLogo(props: {
  variant?: 'blue' | 'white';
  width?: number;
  className?: string;
  locale?: 'en' | 'fr' | 'es';
}) {
  const { variant = 'blue', className, width = 60, locale = 'en' } = props;
  return (
    <img
      width={`${width}px`}
      src={`https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/${locale === 'es' || locale === 'fr' ? 'pnud' : 'undp'}-logo-${variant}.svg`}
      alt='UNDP Logo'
      className={className}
    />
  );
}

export { UNDPLogo };
