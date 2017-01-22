import xs from 'xstream';
import { run } from '@cycle/xstream-run';
import { makeDOMDriver, DOMSource, h1 } from '@cycle/dom';

interface Source {
  dom: DOMSource
}

function main(source: Source) {
const sinks = {
    dom: xs.periodic(1000).map(i =>
      h1('' + i + ' seconds elapsed')
    )
  };
  return sinks;
}

run(main, {
  dom: makeDOMDriver('#app')
});
