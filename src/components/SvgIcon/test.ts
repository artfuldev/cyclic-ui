import { SvgIcon } from './';
import { expect } from 'chai';
import { mockDOMSource, h } from '@cycle/dom';
import xsAdapter from '@cycle/xstream-adapter';
import xs from 'xstream';

describe('SvgIcon', () => {
  it('should render as a SVG', done => {
    const svgIcon = SvgIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of('pink'),
      children$: xs.of([h('path')])
    });
    const dom$ = svgIcon.dom.take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.sel).to.have.string('svg')
      });
  });
});
