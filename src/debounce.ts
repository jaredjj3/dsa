/**
 * Debounces a function so that it's not called until after it hasn't been called for the specified ms.
 */
export const debounce = <T extends (...args: any[]) => void>(func: T, ms: number) => {
  // NodeJS typings don't play nice with WebAPI types.
  let handle: any = null;

  return (...args: Parameters<T>) => {
    clearTimeout(handle);
    handle = setTimeout(() => {
      func(...args);
    }, ms);
  };
};
