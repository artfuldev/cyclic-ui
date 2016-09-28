import { Style } from '../styles';
import { Theme } from '../styles/themes';

export function themeify(style: Style, theme: Theme): Style {
  const newStyle: Style = {};
  for (var key in style) {
    if (!style.hasOwnProperty(key))
      continue;
    const styleKey = style[key];
    if (theme[styleKey] != undefined)
      newStyle[key] = theme[styleKey];
    else if (theme.palette != undefined && theme.palette[styleKey] != undefined)
      newStyle[key] = theme.palette[styleKey];
    else
      newStyle[key] = styleKey;
  }
  return newStyle;
}

export default themeify;
