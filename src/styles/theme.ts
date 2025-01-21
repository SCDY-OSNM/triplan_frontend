export type ColorKey =
  | 'rgb1'
  | 'rgb2'
  | 'point'
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
  | 'orange';

interface DefaultTheme {
  color: Record<ColorKey, string>;
}

export const theme: DefaultTheme = {
  color: {
    rgb1: '#7E8CFF',
    rgb2: '#90DAF7',
    point: '#7A89FA',
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
  },
};
