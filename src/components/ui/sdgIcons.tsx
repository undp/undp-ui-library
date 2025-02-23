import {
  SDG1,
  SDG10,
  SDG11,
  SDG12,
  SDG13,
  SDG14,
  SDG15,
  SDG16,
  SDG17,
  SDG2,
  SDG3,
  SDG4,
  SDG5,
  SDG6,
  SDG7,
  SDG8,
  SDG9,
} from '../icons/icons';

interface Props {
  sdg:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17;
  size?: number;
  background: boolean;
}

function SDGIcons(props: Props) {
  const { sdg, size, background } = props;
  switch (`${sdg}`) {
    case '1':
      return <SDG1 size={size} background={background} />;
    case '2':
      return <SDG2 size={size} background={background} />;
    case '3':
      return <SDG3 size={size} background={background} />;
    case '4':
      return <SDG4 size={size} background={background} />;
    case '5':
      return <SDG5 size={size} background={background} />;
    case '6':
      return <SDG6 size={size} background={background} />;
    case '7':
      return <SDG7 size={size} background={background} />;
    case '8':
      return <SDG8 size={size} background={background} />;
    case '9':
      return <SDG9 size={size} background={background} />;
    case '10':
      return <SDG10 size={size} background={background} />;
    case '11':
      return <SDG11 size={size} background={background} />;
    case '12':
      return <SDG12 size={size} background={background} />;
    case '13':
      return <SDG13 size={size} background={background} />;
    case '14':
      return <SDG14 size={size} background={background} />;
    case '15':
      return <SDG15 size={size} background={background} />;
    case '16':
      return <SDG16 size={size} background={background} />;
    case '17':
      return <SDG17 size={size} background={background} />;
    default:
      return <div />;
  }
}

export { SDGIcons };
