import UndpLogoBlue from '../icons/undp-logo-blue.svg';
import UndpLogoWhite from '../icons/undp-logo-white.svg';

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
          src={UndpLogoBlue}
          alt='UNDP Logo'
          className={className}
        />
      );
    case 'white':
      return (
        <img
          width={`${width || 60}px`}
          src={UndpLogoWhite}
          alt='UNDP Logo'
          className={className}
        />
      );
    default:
      return (
        <img
          width={`${width || 60}px`}
          src={UndpLogoBlue}
          alt='UNDP Logo'
          className={className}
        />
      );
  }
}

export { UNDPLogo };
