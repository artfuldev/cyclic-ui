import { FontIcon } from './';
import { expect } from 'chai';
import { mockDOMSource } from '@cycle/dom';
import xsAdapter from '@cycle/xstream-adapter';
import xs from 'xstream';

const noop = () => {};

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
        next: vdom => {
          const tagName = vdom.sel.split('.')[0];
          expect(tagName).to.equal('span');
        }
      });
  });
  it('should render default class of .material-icons');
  it('should render class that is passed in');
  it('should render the icon that is passed in');
});
