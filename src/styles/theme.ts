export type ColorKey =
  | 'rgb1'
  | 'rgb2'
  | 'point'
  | 'title'
  | 'bkTitle'
  | 'bkBody'
  | 'darkGray'
  | 'gray'
  | 'heartR'
  | 'heartG'
  | 'heartBg'
  | 'line'
  | 'yellow'
  | 'blue'
  | 'green'
  | 'orange'
  | 'loading'
  | 'star'
  | 'footer';

export type Shadows = string;

export type BorderRadius = string;

interface DefaultTheme {
  color: Record<ColorKey, string>;
  borderRadius: Record<BorderRadius, string>;
  shadow: Record<Shadows, string>;
}

export const theme: DefaultTheme = {
  color: {
    rgb1: '#7E8CFF',
    rgb2: '#90DAF7',
    point: '#7A89FA',
    title: '#222222',
    bkTitle: '#303030',
    bkBody: '#484848',
    darkGray: '#7A7A7A',
    gray: '#A7A7A7',
    heartR: '#EB3223',
    heartG: '#999999',
    heartBg: '#F5F5F5',
    line: '#DADBDF',
    yellow: '#FFB200',
    blue: '#008CFF',
    green: '#00AF00',
    orange: '#FF5E00',
    loading: '#D9D9D9',
    star: '#FFC107',
    footer: '#F7F6F6',
  },

  borderRadius: {
    xs: '5px',
    sm: '8px',
    md: '10px',
    lg: '15px',
    xl: '20px',
    xxl: '30px',
    round: '50%',
  },

  shadow: {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    bottom: '0 1px 10px rgba(0, 0, 0, 0.1)',
    rb: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};
