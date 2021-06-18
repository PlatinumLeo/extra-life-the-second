import { defaultTheme } from './default';
import { monochromeTheme } from './monochrome';

export function getThemeByName(theme) {
  switch(theme) {
    case 'monochrome': return monochromeTheme;
    default: return defaultTheme;
  }
}

export const themeNames = [
  'default',
  'monochrome'
];

export default getThemeByName;