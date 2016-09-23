import { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode } from '@cycle/dom';
import { Style } from '../styles';
import { Theme } from '../styles/themes';

export interface UIComponent {
  (sources: UIComponentSources): UIComponentSinks;
}

export interface UIComponentSources {
  dom: DOMSource;
  theme$?: Stream<Theme>;
  style$?: Stream<Style>;
  classes$?: Stream<string>;
}

export interface UIComponentSinks {
  dom: Stream<VNode>;
} 
