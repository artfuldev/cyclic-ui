import themeify from './themeify';
import { Style } from '../styles';
import { Theme } from '../styles/themes';
import { expect } from 'chai';

describe('Themeify', () => {
  it('should not change style if style has no matching keys', () => {
    const style = { 'color': 'pink' } as Style;
    const theme = { palette: { textColor: 'black' } } as Theme;
    const newStyle = themeify(style, theme);
    expect(newStyle.color).to.equal('pink');
  });
  it('should not change style if theme has no matching keys', () => {
    const style = { 'color': 'textColor' } as Style;
    const theme = {} as Theme;
    const newStyle = themeify(style, theme);
    expect(newStyle.color).to.equal('textColor');
  });
  it('should change style if theme has matching keys', () => {
    const style = { 'color': 'textColor' } as Style;
    const theme = { palette: { textColor: 'pink' } } as Theme;
    const newStyle = themeify(style, theme);
    expect(newStyle.color).to.equal('pink');
  });
});
