import { Stream } from 'xstream';

export interface Component {
  (sources: Sources): Sinks
}

export interface Sources {
  [name: string]: Stream<any> | (() => Stream<any>) 
}

export interface Sinks {
  [name: string]: Stream<any> | (() => Stream<any>)
} 
