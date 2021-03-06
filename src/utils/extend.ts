import { Stream } from 'xstream';

export function shallowCopy(target: Object, source: Object) {
  for (var key in source)
      if (source.hasOwnProperty(key))
        target[key] = source[key];
}

export function shallowExtend(target: Object, ...sources: Object[]): Object {
  sources.forEach(source => shallowCopy(target, source));
  return target;
}

export function shallowExtendNew(target: Object, ...sources: Object[]): Object {
  return shallowExtend({}, ...[target, ...sources]);
}

export function merge<T>(target: T, ...sources: T[]): T {
  return shallowExtendNew(target, ...sources) as T;
}

export function take<T>(main$: Stream<T>, default$: Stream<T>): Stream<T> {
  return main$ == undefined
      ? default$
      : main$;
}
