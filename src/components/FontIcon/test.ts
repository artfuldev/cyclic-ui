import { FontIcon } from './';
import { expect } from 'chai';
import { mockDOMSource } from '@cycle/dom';
import xsAdapter from '@cycle/xstream-adapter';
import xs from 'xstream';

const noop = () => {};

describe('FontIcon', function () {
  it('is rendered as span element', function () {
    const fontIcon = FontIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of('pink'),
      icon$: xs.of('save')
    });
    const dom$ = fontIcon.dom.take(1);
    dom$.addListener({
        complete: noop,
        error: noop,
        next: vdom => expect((vdom.elm as HTMLElement).tagName).to.equal('SPAN')
      });
  });

  it('has a test that passes', function () {
    expect(true).to.equal(true);
  });
});
