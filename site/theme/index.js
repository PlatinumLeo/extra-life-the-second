import { defaultTheme } from './default';
import { monochromeTheme } from './monochrome';

export function getThemeByName(theme, type = 'light') {
  switch(theme) {
    case 'monochrome': return monochromeTheme(type);
    default: return defaultTheme(type);
  }
}

export const themeNames = [
  'default',
  'monochrome'
];

export default getThemeByName;