import { anthemCharacters } from './anthem';
import { BASE_TIME } from './baseTime';

class TimeBasedSequenceCharacter {
  baseTime: number = BASE_TIME;

  gap: number = 3600;

  arr: string[] = anthemCharacters;

  /**
   * @param baseTime default unit: millisecond
   * @param gap default unit: second
   * @param arr default: Korean national anthem
   */
  constructor(baseTime?: number, gap?: number, arr?: string[]) {
    if (baseTime !== undefined) this.baseTime = baseTime;
    if (gap !== undefined) this.gap = gap;
    if (arr !== undefined) this.arr = arr;
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
