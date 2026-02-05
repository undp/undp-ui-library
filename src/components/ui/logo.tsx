interface Props {
  variant?: 'blue' | 'white';
  width?: number;
  className?: string;
}

function UNDPLogo(props: Props) {
  const { variant, className, width } = props;
  switch (variant) {
    case 'blue':
      return (
        <img
          width={`${width || 60}px`}
          src='https://cdn.jsdelivr.net/npm/@undp/design-system-assets@1.6.1/images/undp-logo-blue.svg'
          alt='UNDP Logo'
          className={className}
        />
      );
    case 'white':
      return (
        <img
          width={`${width || 60}px`}
          src='https://cdn.jsdelivr.net/npm/@undp/design-system-assets@1.6.1/images/undp-logo-white.svg'
          alt='UNDP Logo'
          className={className}
        />
      );
    default:
      return (
        <img
          width={`${width || 60}px`}
          src='https://cdn.jsdelivr.net/npm/@undp/design-system-assets@1.6.1/images/undp-logo-blue.svg'
          alt='UNDP Logo'
          className={className}
        />
      );
  }
}

export { UNDPLogo };
