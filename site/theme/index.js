import { defaultTheme } from './default';
import { monochromeTheme } from './versions/monochrome';
import { alphaTheme } from './versions/alpha';

export function getThemeByName(theme, type = 'light') {
  switch(theme) {
    case 'alpha': return alphaTheme(type);
    case 'monochrome': return monochromeTheme(type);
    default: return defaultTheme(type);
  }
}

export const themeNames = [
  'default',
  'alpha',
  'monochrome'
];

export default getThemeByName;