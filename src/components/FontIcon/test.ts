import { FontIcon } from './';
import { expect } from 'chai';
import { mockDOMSource } from '@cycle/dom';
import xsAdapter from '@cycle/xstream-adapter';
import xs from 'xstream';

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
  it('should render the icon that is passed in');
  it('should render the color that is passed in');
});
