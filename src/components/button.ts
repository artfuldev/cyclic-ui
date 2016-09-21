import xs, { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode, button } from '@cycle/dom';
import isolate from '@cycle/isolate';

export interface ButtonSources {
  selector$: Stream<string>;
  content$: Stream<VNode[]|string>;
  dom: DOMSource;
}

export interface ButtonSinks {
  dom: Stream<VNode>;
  click$: Stream<MouseEvent>;
}

function ButtonComponent(sources: ButtonSources): ButtonSinks {
  const click$ =
    sources.dom
      .select('button')
      .events('click')
      .map(event => event as MouseEvent);
  const selector$ = sources.selector$;
  const content$ = sources.content$;
  const dom =
    xs.combine(selector$, content$)
      .map(([selector, content]) => button(selector, content));
  return {
    dom,
    click$
  };
}

export const Button = (sources: ButtonSources) => isolate(ButtonComponent)(sources);
export default Button;
