import { UIComponent, UIComponentSources, UIComponentSinks } from '../';
import xs, { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode, span } from '@cycle/dom';
import isolate from '@cycle/isolate';
import { merge, take } from '../../utils/extend';
import { themeify } from '../../utils/themeify';
import { Style } from '../../styles';
import { Theme, defaultTheme } from '../../styles/themes';

export interface FontIconSources extends UIComponentSources {
  color$: Stream<string>;
  icon$: Stream<string>;
  hoverColor$?: Stream<string>;
}

export interface FontIconSinks extends UIComponentSinks { }

const fontIconStyle: Style = {};
const fontIconClasses = '.material-icons';

function FontIconComponent(sources: FontIconSources): FontIconSinks {
  const hover$ =
    xs.merge(
      sources.dom
        .select('span')
        .events('mouseenter')
        .mapTo(false),
      sources.dom
        .select('span')
        .events('mouseenter')
        .mapTo(true)
    ).startWith(false);
  const theme$ =
    take(sources.theme$, xs.of(defaultTheme))
    .remember();
  const color$ =
    theme$.map(theme =>
      take(sources.color$, xs.of(theme.palette.textColor))
    ).flatten();
  const hoverColor$ =
    take(sources.hoverColor$, color$);
  const colorStyle$ =
    hover$.map(hover =>
      hover
        ? hoverColor$
        : color$
    ).flatten()
    .map<Style>(color => ({ color }));
  const style$ =
    colorStyle$.map(colorStyle =>
      theme$.map(theme =>
        take(sources.style$, xs.of(fontIconStyle)
          .map(style => merge(fontIconStyle, style))
        ).map(style => themeify(style, theme))
      ).flatten()
      .map(style => merge(style, colorStyle))
    ).flatten();
  const classes$ =
    take(sources.classes$, xs.of(fontIconClasses));
  const dom =
    xs.combine(classes$, style$, sources.icon$)
      .map(([classes, style, icon]) => span(classes, { style }, [icon]));
  return {
    dom
  };
}

export const FontIcon = (sources: FontIconSources) => isolate(FontIconComponent)(sources);
export default FontIcon;
