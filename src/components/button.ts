import { UIComponent, UIComponentSources, UIComponentSinks } from './';
import xs, { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode, button } from '@cycle/dom';
import isolate from '@cycle/isolate';
import { shallowExtendNew } from '../utils/extend';
import { Style } from '../styles';
import { Theme, defaultTheme } from '../styles/themes';

export interface ButtonSources extends UIComponentSources {
  content$: Stream<VNode[]|string>;
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
  const theme$ =
    sources.theme$ == undefined
      ? xs.of(defaultTheme)
      : sources.theme$.map(theme => shallowExtendNew(defaultTheme, theme) as Theme);
  const style$ = 
    sources.style$ == undefined
      ? xs.of(buttonStyle)
      : sources.style$.map(style => shallowExtendNew(buttonStyle, style) as Style);
  const classes$ = 
    sources.classes$ == undefined
      ? xs.of(buttonClasses)
      : sources.classes$;
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
