import xs from 'xstream';
import { run } from '@cycle/xstream-run';
import { makeDOMDriver, DOMSource, h1, div } from '@cycle/dom';
import { Button } from '../src/components/Button';

interface Source {
  dom: DOMSource
}

function main(source: Source) {
  const button = Button({
    dom: source.dom,
    content$: xs.of('Stop')
  });
  const restOfDom$ = xs.periodic(1000).map(i => h1(i + ' seconds elapsed'));
  const vtree$ = xs.combine(button.dom, restOfDom$).map(div);
  button.click$.map(x => console.log('clicked'));
  return { dom: vtree$ };
}

run(main, {
  dom: makeDOMDriver('#app')
});
