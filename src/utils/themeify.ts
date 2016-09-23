import { Style } from '../styles';
import { Theme } from '../styles/themes';

export function themeify(style: Style, theme: Theme): Style {
  const newStyle: Style = {};
  for (var key in style) {
    if (style.hasOwnProperty(key))
      if (theme[style[key]] != undefined)
        newStyle[key] == theme[style[key]];
      else
        newStyle[key] = style[key];
  }
  return style;
}

export default themeify;
