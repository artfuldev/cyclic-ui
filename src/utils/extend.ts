export function shallowCopy(target: Object, source: Object) {
  for (var key in source)
      if (source.hasOwnProperty(key))
        target[key] = source[key];
}

export function shallowExtend(target: Object, ...sources: Object[]) {
  sources.forEach(source => shallowCopy(target, source));
}

export function shallowExtendNew(target: Object, ...sources: Object[]) {
  return shallowExtend({}, target, sources);
}
