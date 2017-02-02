import xs from 'xstream';
import { run } from '@cycle/xstream-run';
import { makeDOMDriver, DOMSource, h1, div } from '@cycle/dom';
import { FontIcon } from '../src/components/FontIcon';

interface Source {
  dom: DOMSource
}

function main(source: Source) {
  const fontIcon = FontIcon({
    dom: source.dom,
    classes$: xs.of('fa fa-heart'),
    color$: xs.of('red'),
    icon$: xs.of('')
  });
  const restOfDom$ = xs.periodic(1000).map(i => h1(i + ' seconds elapsed'));
  const vtree$ = xs.combine(fontIcon.dom, restOfDom$).map(div);
  return { dom: vtree$ };
}

run(main, {
  dom: makeDOMDriver('#app')
});
