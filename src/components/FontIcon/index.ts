import { UIComponent, UIComponentSources, UIComponentSinks } from '../';
import xs, { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode, button } from '@cycle/dom';
import isolate from '@cycle/isolate';
import { shallowExtendNew } from '../../utils/extend';
import { themeify } from '../../utils/themeify';
import { Style } from '../../styles';
import { Theme, defaultTheme } from '../../styles/themes';

export interface FontIconSources extends UIComponentSources {
  color$: Stream<string>;
  hoverColor$: Stream<string>;
}

export interface FontIconSinks extends UIComponentSinks { }

const fontIconStyle: Style = {};
const fontIconClasses = '';

function FontIconComponent(sources: FontIconSources): FontIconSinks {
  const hover$ =
    xs.merge(
      sources.dom
        .select('button')
        .events('mouseenter')
        .mapTo(false),
      sources.dom
        .select('button')
        .events('mouseenter')
        .mapTo(true)
    ).startWith(false);
  const theme$ =
    sources.theme$ == undefined
      ? xs.of(defaultTheme)
      : sources.theme$.map(theme => shallowExtendNew(defaultTheme, theme) as Theme);
  const localColor$ =
    theme$.map(theme =>
      sources.color$ == undefined
        ? xs.of(theme.palette.textColor)
        : sources.color$
    ).flatten();
  const color$ =
    hover$.map(hover =>
      hover
        ? color$
        : color$
    ).flatten();
  const style$ =
    theme$.map(theme =>
      (sources.style$ == undefined
        ? xs.of(fontIconStyle)
        : sources.style$
          .map(style => shallowExtendNew(fontIconStyle, style) as Style)
      ).map(style => themeify(style, theme))
    ).flatten();
  const classes$ =
    sources.classes$ == undefined
      ? xs.of(fontIconClasses)
      : sources.classes$;
  const dom =
    xs.combine(classes$, style$, sources.color$, hover$)
      .map(([classes, style, color, hover]) => button(classes, { style }, content));
  return {
    dom
  };
}

export const Button = (sources: ButtonSources) => isolate(ButtonComponent)(sources);
export default Button;
