import { debounce } from './debounce';

describe('debounce', () => {
  let func: jest.Mock;
  let debounced: () => void;

  beforeEach(() => {
    jest.useFakeTimers();

    func = jest.fn();
    debounced = debounce(func, 1);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('does not call the function immediately', () => {
    debounced();
    expect(func).not.toHaveBeenCalled();
  });

  it('calls the function after ms has passed', () => {
    debounced();
    jest.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('resets the debounce timer when called multiple times', () => {
    debounced();
    debounced();
    debounced();
    jest.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('calls the function when waiting for time to pass between calls', () => {
    debounced();
    jest.advanceTimersByTime(1);

    debounced();
    jest.advanceTimersByTime(1);

    expect(func).toHaveBeenCalledTimes(2);
  });
});
