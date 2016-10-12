import { FontIcon } from './';
import { expect } from 'chai';
import { mockDOMSource } from '@cycle/dom';
import xsAdapter from '@cycle/xstream-adapter';
import xs from 'xstream';
import delay from 'xstream/extra/delay';
import 'mocha';

describe('FontIcon', () => {
  it('should render as a SPAN', done => {
    const fontIcon = FontIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of('pink'),
      icon$: xs.of('save')
    });
    const dom$ = fontIcon.dom.take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.sel).to.have.string('span')
      });
  });
  it('should render default class of .material-icons', done => {
    const fontIcon = FontIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of('pink'),
      icon$: xs.of('save')
    });
    const dom$ = fontIcon.dom.take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.sel).to.have.string('.material-icons')
      });
  });
  it('should render the class that is passed in', done => {
    const fontIcon = FontIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of('pink'),
      icon$: xs.of('save'),
      classes$: xs.of('.fa.fa-icon')
    });
    const dom$ = fontIcon.dom.take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom =>
          expect(vdom.sel).to.not.have.string('.material-icons')
          && expect(vdom.sel).to.have.string('.fa.fa-icon')
      });
  });
  it('should render the icon that is passed in', done => {
    const icon = 'save';
    const fontIcon = FontIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of('pink'),
      icon$: xs.of(icon)
    });
    const dom$ = fontIcon.dom.take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.children[0]['text']).to.equal(icon)
      });
  });
  it('should render the color that is passed in', done => {
    const color = 'red';
    const fontIcon = FontIcon({
      dom: mockDOMSource(xsAdapter, {}),
      color$: xs.of(color),
      icon$: xs.of('save')
    });
    const dom$ = fontIcon.dom.take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.data.style['color']).to.equal(color)
      });
  });
  it('should be rendered in normal color on hover if no hover color is provided', done => {
    const color = 'red';
    const hoverColor = 'pink';
    const fontIcon = FontIcon({
      dom: mockDOMSource(xsAdapter, {
        'span': {
          'mouseenter': xs.of(null).compose(delay(100)),
          'mouseleave': xs.of(null).compose(delay(200))
        }
      }),
      color$: xs.of(color),
      icon$: xs.of('save')
    });
    const dom$ = fontIcon.dom.drop(1).take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.data.style['color']).to.equal(color)
      });
  });
  it('should be rendered in hover color on hover if hover color is provided', done => {
    const color = 'red';
    const hoverColor = 'pink';
    const fontIcon = FontIcon({
      dom: mockDOMSource(xsAdapter, {
        'span': {
          'mouseenter': xs.of(null).compose(delay(100)),
          'mouseleave': xs.of(null).compose(delay(200))
        }
      }),
      color$: xs.of(color),
      icon$: xs.of('save'),
      hoverColor$: xs.of(hoverColor)
    });
    const dom$ = fontIcon.dom.drop(1).take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.data.style['color']).to.equal(hoverColor)
      });
  });
  it('should be rendered in normal color on hover end even if hover color is provided', done => {
    const color = 'red';
    const hoverColor = 'pink';
    const fontIcon = FontIcon({
      dom: mockDOMSource(xsAdapter, {
        'span': {
          'mouseenter': xs.of(null).compose(delay(100)),
          'mouseleave': xs.of(null).compose(delay(200))
        }
      }),
      color$: xs.of(color),
      icon$: xs.of('save'),
      hoverColor$: xs.of(hoverColor)
    });
    const dom$ = fontIcon.dom.drop(2).take(1);
    dom$.addListener({
        complete: done,
        error: err => done(err),
        next: vdom => expect(vdom.data.style['color']).to.equal(color)
      });
  });
});
