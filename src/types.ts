export interface Graphable<T> {
  getChildren(): Graphable<T>[];
}

export type StackFrame<Args extends any[], Return extends any> = {
  args: Args;
  onReturn: (ret: Return) => void;
};
