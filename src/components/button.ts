import { UIComponent, UIComponentSources, UIComponentSinks } from './';
import xs, { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode, button } from '@cycle/dom';
import isolate from '@cycle/isolate';
import { shallowExtendNew } from './../utils/extend';

export interface ButtonSources extends UIComponentSources {
  content$: Stream<VNode[]|string>;
}

export interface ButtonSinks extends UIComponentSinks {
  click$: Stream<MouseEvent>;
}

const buttonStyle = {};
const buttonClasses = '';

function ButtonComponent(sources: ButtonSources): ButtonSinks {
  const click$ =
    sources.dom
      .select('button')
      .events('click')
      .map(event => event as MouseEvent);
  const style$ = 
    sources.style$ == undefined
      ? xs.of(buttonStyle)
      : sources.style$.map(style => shallowExtendNew(buttonStyle, style));
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
