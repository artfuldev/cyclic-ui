import { UIComponent, UIComponentSources, UIComponentSinks } from '../';
import xs, { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode, svg } from '@cycle/dom';
import isolate from '@cycle/isolate';
import { merge, take } from '../../utils/extend';
import { themeify } from '../../utils/themeify';
import { Style } from '../../styles';
import { Theme, defaultTheme } from '../../styles/themes';

export interface SvgIconSources extends UIComponentSources {
  color$: Stream<string>;
  children$: Stream<VNode[]>;
  hoverColor$?: Stream<string>;
  viewBox$?: Stream<string>;
}

export interface SvgIconSinks extends UIComponentSinks { }

const svgIconStyle: Style = {
  display: 'inline-block',
  color: 'rgba(0, 0, 0, 0.870588)',
  fill: 'currentcolor',
  height: '24px',
  width: '24px',
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  marginRight: '24px'
};
const svgIconClasses = '';
const viewBox = '0 0 24 24';

function SvgIconComponent(sources: SvgIconSources): SvgIconSinks {
  const hover$ =
    xs.merge(
      sources.dom
        .select('span')
        .events('mouseleave')
        .mapTo(false),
      sources.dom
        .select('span')
        .events('mouseenter')
        .mapTo(true)
    ).startWith(false);
  const theme$ =
    take(sources.theme$, xs.of(defaultTheme))
    .remember();
  const color$ =
    theme$.map(theme =>
      take(sources.color$, xs.of(theme.palette.textColor))
    ).flatten();
  const hoverColor$ =
    take(sources.hoverColor$, color$);
  const colorStyle$ =
    hover$.map(hover =>
      hover
        ? hoverColor$
        : color$
    ).flatten()
    .map<Style>(color => ({ color }));
  const viewBox$ =
    take(sources.viewBox$, xs.of(viewBox));
  const style$ =
    colorStyle$.map(colorStyle =>
      theme$.map(theme =>
        take(sources.style$, xs.of(svgIconStyle)
          .map(style => merge(svgIconStyle, style))
        ).map(style => themeify(style, theme))
      ).flatten()
      .map(style => merge(style, colorStyle))
    ).flatten();
  const classes$ =
    take(sources.classes$, xs.of(svgIconClasses));
  const dom =
    xs.combine(classes$, style$, sources.children$, viewBox$)
      .map(([classes, style, children, viewBox]) =>
        classes
          ? svg(classes, { style, props: { viewBox } }, children)
          : svg({ style, props: { viewBox } }, children));
  return {
    dom
  };
}

export const SvgIcon = (sources: SvgIconSources) => isolate(SvgIconComponent)(sources);
export default SvgIcon;
