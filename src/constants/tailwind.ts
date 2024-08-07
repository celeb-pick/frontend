import omit from 'lodash.omit';
import twDefaultColors from 'tailwindcss/colors';

/**
 * `inherit`, `current`, `transparent`, `black`, `white`을 포함한
 * Tailwind의 모든 컬러셋 입니다.
 */
export const tailwindAllColors: Omit<
  typeof twDefaultColors,
  'lightBlue' | 'warmGray' | 'trueGray' | 'coolGray' | 'blueGray'
> = omit(twDefaultColors, [
  'lightBlue',
  'warmGray',
  'trueGray',
  'coolGray',
  'blueGray',
]);

/**
 * `inherit`, `current`, `transparent`, `black`, `white`을 제외한
 * Tailwind의 컬러셋 입니다.
 */
export const tailwindColors: Omit<
  typeof tailwindAllColors,
  'inherit' | 'current' | 'transparent' | 'black' | 'white'
> = omit(tailwindAllColors, [
  'inherit',
  'current',
  'transparent',
  'black',
  'white',
]);
