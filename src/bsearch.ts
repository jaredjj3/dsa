export enum BsearchDir {
  Left,
  Right,
  Center,
}

export type BsearchGps<T> = (items: T[], index: number) => BsearchDir;

export type Bsearch<T> = (items: T[]) => number;

const midpoint = (left: number, right: number) => Math.floor((left + right) / 2);

export const equals =
  <T>(target: T): BsearchGps<T> =>
  (items, index) => {
    const item = items[index];
    if (target < item) {
      return BsearchDir.Left;
    }
    if (target > item) {
      return BsearchDir.Right;
    }
    return BsearchDir.Center;
  };

const recursive = <T>(gps: BsearchGps<T>): Bsearch<T> => {
  const bsearch = (items: T[], left: number, right: number): number => {
    if (left > right) {
      return -1;
    }

    const mid = midpoint(left, right);
    switch (gps(items, mid)) {
      case BsearchDir.Left:
        return bsearch(items, left, mid - 1);
      case BsearchDir.Right:
        return bsearch(items, mid + 1, right);
      case BsearchDir.Center:
        return mid;
    }
  };

  return (items) => bsearch(items, 0, items.length - 1);
};

const iterative =
  <T>(gps: BsearchGps<T>): Bsearch<T> =>
  (items): number => {
    let left = 0;
    let right = items.length - 1;

    while (left <= right) {
      const mid = midpoint(left, right);
      switch (gps(items, mid)) {
        case BsearchDir.Left:
          right = mid - 1;
          break;
        case BsearchDir.Right:
          left = mid + 1;
          break;
        case BsearchDir.Center:
          return mid;
      }
    }

    return -1;
  };

export const bsearch = {
  default: iterative,
  iterative,
  recursive,
};
