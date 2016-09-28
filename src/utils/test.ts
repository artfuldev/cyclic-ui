import themeify from './themeify';
import { merge } from './extend';
import { Style } from '../styles';
import { Theme } from '../styles/themes';
import { expect } from 'chai';

describe('themeify(style: Style, theme: Theme): Style', () => {
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
  it('should not change original style even if theme has matching keys', () => {
    const style = { 'color': 'textColor' } as Style;
    const theme = { palette: { textColor: 'pink' } } as Theme;
    const newStyle = themeify(style, theme);
    expect(style.color).to.equal('textColor');
  });
});

describe('merge<T>(target: T, ...sources: T[]): T', () => {
  it('should add properties when not present in target', () => {
    const target = {} as Style;
    const source = { color: 'textColor', background: 'white' } as Style;
    const result = merge(target, source);
    expect(result.color).to.exist;
    expect(result.color).to.equal('textColor');
    expect(result.background).to.exist;
    expect(result.background).to.equal('white');
  });
  it('should overwrite properties when present in target', () => {
    const target = { color: 'textColor' } as Style;
    const source = { color: 'pink', background: 'white' } as Style;
    const result = merge(target, source);
    expect(result.color).to.equal('pink');
  });
});
