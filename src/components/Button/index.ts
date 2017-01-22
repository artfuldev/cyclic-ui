import { UIComponent, UIComponentSources, UIComponentSinks } from '../';
import xs, { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode, button } from '@cycle/dom';
import isolate from '@cycle/isolate';
import { merge, defaultTo } from '../../utils/extend';
import { themeify } from '../../utils/themeify';
import { Style } from '../../styles';
import { Theme, defaultTheme } from '../../styles/themes';

export interface ButtonSources extends UIComponentSources {
  content$: Stream<VNode[] | string>;
}

export interface ButtonSinks extends UIComponentSinks {
  click$: Stream<MouseEvent>;
}

const buttonStyle: Style = {};
const buttonClasses = '';

function ButtonComponent(sources: ButtonSources): ButtonSinks {
  const click$ =
    sources.dom
      .select('button')
      .events('click')
      .map(event => event as MouseEvent);
  const theme$ = defaultTo(sources.theme$, xs.of(defaultTheme));
  const style$ =
    theme$.map(theme =>
      defaultTo(sources.style$, xs.of(buttonStyle))
          .map(style => merge(buttonStyle, style))
          .map(style => themeify(style, theme))
    ).flatten();
  const classes$ = defaultTo(sources.classes$, xs.of(buttonClasses));
  const dom =
    xs.combine(classes$, style$, sources.content$)
      .map(([classes, style, content]) => button(classes, { style }, content));
  return {
    dom,
    click$
  };
}

export const Button = (sources: ButtonSources) => isolate(ButtonComponent)(sources);
export default Button;
