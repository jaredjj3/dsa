import { throttle } from './throttle';

describe('throttle', () => {
  let now: number;
  let func: jest.Mock;
  let throttled: () => void;

  beforeEach(() => {
    now = 0;
    func = jest.fn();
    throttled = throttle(func, 1);
    jest.spyOn(Date, 'now').mockImplementation(() => now);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('invokes the function immediately', () => {
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('does not invoke the function if ms time has not passed', () => {
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('invokes the function if ms time has passed', () => {
    throttled();
    now = 1;
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('invokes the function only once after ms time has passed', () => {
    throttled();
    now = 1;
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });
});
