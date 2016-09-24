import { UIComponent, UIComponentSources, UIComponentSinks } from '../';
import { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode, span } from '@cycle/dom';
import isolate from '@cycle/isolate';
import { merge } from '../../utils/extend';
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
    Stream.merge(
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
    sources.theme$ == undefined
      ? Stream.of(defaultTheme)
      : sources.theme$.map(theme => merge(defaultTheme, theme));
  const localColor$ =
    theme$.map(theme =>
      sources.color$ == undefined
        ? Stream.of(theme.palette.textColor)
        : sources.color$
    ).flatten();
  const hoverColor$ =
    sources.hoverColor$ == undefined
      ? localColor$
      : sources.hoverColor$;
  const colorStyle$ =
    hover$.map(hover =>
      hover
        ? hoverColor$
        : localColor$
    ).flatten()
    .map(color => ({ color } as Style));
  const style$ =
    colorStyle$.map(colorStyle =>
      theme$.map(theme =>
        (sources.style$ == undefined
          ? Stream.of(fontIconStyle)
          : sources.style$
            .map(style => merge(fontIconStyle, style))
        ).map(style => themeify(style, theme))
      ).flatten()
      .map(style => merge(style, colorStyle))
    ).flatten();
  const classes$ =
    sources.classes$ == undefined
      ? Stream.of(fontIconClasses)
      : sources.classes$;
  const dom =
    Stream.combine(classes$, style$, sources.icon$)
      .map(([classes, style, icon]) => span(classes, { style }, [icon]));
  return {
    dom
  };
}

export const FontIcon = (sources: FontIconSources) => isolate(FontIconComponent)(sources);
export default FontIcon;
