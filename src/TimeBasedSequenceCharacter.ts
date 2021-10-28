import { anthemCharacters } from './anthem';
import { BASE_TIME } from './baseTime';

type OptionType<T> = {
  baseTime: number;
  gap: number;
  arr: T[];
};

class TimeBasedSequenceCharacter<T = string> {
  baseTime: number;

  gap: number;

  arr: (T | string)[];

  /**
   * @param baseTime default unit: millisecond
   * @param gap default unit: second
   * @param arr default: Korean national anthem
   */
  constructor({ baseTime, gap, arr }: Partial<OptionType<T>> = {}) {
    this.baseTime = baseTime ?? BASE_TIME;
    this.gap = gap ?? 3600;
    this.arr = arr || anthemCharacters;
  }

  /**
   * @param time default unit: millisecond
   * @returns time based sequence character
   */
  getTimeBasedCharacter(ms: number) {
    const n = Math.floor(ms / (this.gap * 1000));
    const base = Math.floor(this.baseTime / (this.gap * 1000));
    const seq = (n - base) % this.arr.length;
    return this.arr[seq];
  }
}

export { TimeBasedSequenceCharacter };
