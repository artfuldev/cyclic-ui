import { UIComponent, UIComponentSources, UIComponentSinks } from './';
import xs, { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode, button } from '@cycle/dom';
import isolate from '@cycle/isolate';

export interface ButtonSources extends UIComponentSources {
  content$: Stream<VNode[]|string>;
}

export interface ButtonSinks extends UIComponentSinks {
  click$: Stream<MouseEvent>;
}

function ButtonComponent(sources: ButtonSources): ButtonSinks {
  const click$ =
    sources.dom
      .select('button')
      .events('click')
      .map(event => event as MouseEvent);
  const dom =
    xs.combine(sources.classes$, sources.style$, sources.content$)
      .map(([classes, style, content]) => button(classes, { style }, content));
  return {
    dom,
    click$
  };
}

export const Button = (sources: ButtonSources) => isolate(ButtonComponent)(sources);
export default Button;
