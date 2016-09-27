import { FontIcon } from './';
import { expect } from 'chai';
import { mockDOMSource } from '@cycle/dom';
import xsAdapter from '@cycle/xstream-adapter';
import xs from 'xstream';

const noop = () => {};

describe('FontIcon', () => {
  it('should render as a SPAN', () => {
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
  it('should render default class of .material-icons');
  it('should render class that is passed in');
  it('should render the icon that is passed in');
});
