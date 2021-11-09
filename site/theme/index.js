import { defaultTheme } from './default';
import { monochromeTheme } from './versions/monochrome';
import { alphaTheme } from './versions/alpha';

export function getThemeByName(theme, mode = 'light') {
  switch(theme) {
    case 'alpha': return alphaTheme(mode);
    case 'monochrome': return monochromeTheme(mode);
    default: return defaultTheme(mode);
  }
}

export const themeNames = [
  'default',
  'alpha',
  'monochrome'
];

export default getThemeByName;