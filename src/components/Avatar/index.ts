import { UIComponentSources, UIComponentSinks } from '../';
import xs, { Stream } from 'xstream';
import { VNode } from '@cycle/dom';
import { SvgIconSinks } from '../SvgIcon';
import { FontIconSinks } from '../FontIcon';

export interface AvatarSources extends UIComponentSources {
  backgroundColor$?: Stream<string>;
  children$?: Stream<VNode | string>;
  color$?: Stream<string>;
  icon$?: Stream<SvgIconSinks | FontIconSinks>;
  size$?: Stream<number>;
  src$?: Stream<string>;
}

export interface AvatarSinks extends UIComponentSinks { }
