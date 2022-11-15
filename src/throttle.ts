/**
 * Prevents a function from being called more than once during the specified ms.
 */
export const throttle = <T extends (...args: any[]) => void>(func: T, ms: number) => {
  let invokedAt = Number.NEGATIVE_INFINITY;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    const diff = now - invokedAt;
    if (diff < ms) {
      return;
    }
    invokedAt = Date.now();
    func(...args);
  };
};
