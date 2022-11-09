export interface Graphable<T> {
  getChildren(): Graphable<T>[];
}
