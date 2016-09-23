import { Stream } from 'xstream';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { VNode } from '@cycle/dom';
import { Style } from './../styles';

export interface UIComponent {
  (sources: UIComponentSources): UIComponentSinks;
}

export interface UIComponentSources {
  dom: DOMSource;
  style$?: Stream<Style>;
  classes$?: Stream<string>;
}

export interface UIComponentSinks {
  dom: Stream<VNode>;
} 
