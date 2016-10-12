import { SvgIcon } from './';
import { expect } from 'chai';
import { mockDOMSource, h } from '@cycle/dom';
import xsAdapter from '@cycle/xstream-adapter';
import xs from 'xstream';
import delay from 'xstream/extra/delay';
import 'mocha';

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
  it('should render with no default class', done => {
    const svgIcon = SvgIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of('pink'),
      children$: xs.of([h('path')])
    });
    const dom$ = svgIcon.dom.take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.sel).to.have.string('svg.___cycle')
      });
  });
  it('should render the class that is passed in', done => {
    const svgIcon = SvgIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of('pink'),
      children$: xs.of([h('path')]),
      classes$: xs.of('.fa.fa-icon')
    });
    const dom$ = svgIcon.dom.take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom =>
          expect(vdom.sel).to.not.have.string('svg.___cycle')
          && expect(vdom.sel).to.have.string('.fa.fa-icon')
      });
  });
  it('should render in the color that is passed in', done => {
    const color = 'red';
    const svgIcon = SvgIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of(color),
      children$: xs.of([h('path')])
    });
    const dom$ = svgIcon.dom.take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.data.style['color']).to.equal(color)
      });
  });
  it('should render the children that are passed in', done => {
    const svgIcon = SvgIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of('pink'),
      children$: xs.of([h('path')])
    });
    const dom$ = svgIcon.dom.take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.children[0]['sel']).to.equal('path')
      });
  });
  it('should be rendered in normal color on hover if no hover color is provided', done => {
    const color = 'red';
    const hoverColor = 'pink';
    const svgIcon = SvgIcon({
      dom: mockDOMSource(xsAdapter, {
        'span': {
          'mouseenter': xs.of(null).compose(delay(100)),
          'mouseleave': xs.of(null).compose(delay(200))
        }
      }),
      color$: xs.of(color),
      children$: xs.of([h('path')])
    });
    const dom$ = svgIcon.dom.drop(1).take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.data.style['color']).to.equal(color)
      });
  });
  it('should be rendered in hover color on hover if hover color is provided', done => {
    const color = 'red';
    const hoverColor = 'pink';
    const svgIcon = SvgIcon({
      dom: mockDOMSource(xsAdapter, {
        'span': {
          'mouseenter': xs.of(null).compose(delay(100)),
          'mouseleave': xs.of(null).compose(delay(200))
        }
      }),
      color$: xs.of(color),
      hoverColor$: xs.of(hoverColor),
      children$: xs.of([h('path')])
    });
    const dom$ = svgIcon.dom.drop(1).take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.data.style['color']).to.equal(hoverColor)
      });
  });
  it('should be rendered in normal color on hover end even if hover color is provided', done => {
    const color = 'red';
    const hoverColor = 'pink';
    const svgIcon = SvgIcon({
      dom: mockDOMSource(xsAdapter, {
        'span': {
          'mouseenter': xs.of(null).compose(delay(100)),
          'mouseleave': xs.of(null).compose(delay(200))
        }
      }),
      color$: xs.of(color),
      children$: xs.of([h('path')]),
      hoverColor$: xs.of(hoverColor)
    });
    const dom$ = svgIcon.dom.drop(2).take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.data.style['color']).to.equal(color)
      });
  });
});
