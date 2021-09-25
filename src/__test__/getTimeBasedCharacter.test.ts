/* eslint-disable no-plusplus */
import { BASE_TIME } from '../baseTime';
import { getTimeBasedCharacter } from '../getTimeBasedCharacter';

describe('BASE_TIEM으로부터 연속된 테스트', () => {
  const oneHour = 3600 * 1000;
  let seq = 0;
  it('should be 동', () => {
    expect(getTimeBasedCharacter(BASE_TIME + oneHour * seq++)).toEqual('동');
  });
  it('should be 해', () => {
    expect(getTimeBasedCharacter(BASE_TIME + oneHour * seq++)).toEqual('해');
  });
  it('should be 물', () => {
    expect(getTimeBasedCharacter(BASE_TIME + oneHour * seq++)).toEqual('물');
  });
  it('should be 과', () => {
    expect(getTimeBasedCharacter(BASE_TIME + oneHour * seq++)).toEqual('과');
  });
  it('should be 백', () => {
    expect(getTimeBasedCharacter(BASE_TIME + oneHour * seq++)).toEqual('백');
  });
  it('should be 두', () => {
    expect(getTimeBasedCharacter(BASE_TIME + oneHour * seq++)).toEqual('두');
  });
  it('should be 산', () => {
    expect(getTimeBasedCharacter(BASE_TIME + oneHour * seq++)).toEqual('산');
  });
  it('should be 이', () => {
    expect(getTimeBasedCharacter(BASE_TIME + oneHour * seq++)).toEqual('이');
  });
});
