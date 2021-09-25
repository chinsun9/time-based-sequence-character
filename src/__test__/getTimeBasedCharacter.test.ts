/* eslint-disable no-plusplus */
import { BASE_TIME } from '../baseTime';
import { getTimeBasedCharacter } from '../getTimeBasedCharacter';
import anthemCharacters from '../anthem.json';

const oneHour = 3600 * 1000;
describe('BASE_TIEM으로부터 연속된 테스트', () => {
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

describe('BASE_TIME으로부터 1일 후 테스트', () => {
  const er = anthemCharacters[24];
  it(`should be ${er}`, () => {
    expect(getTimeBasedCharacter(BASE_TIME + oneHour * 24)).toEqual(er);
  });
});

describe('BASE_TIME으로부터 208시간 전후 테스트', () => {
  it(`should be 동`, () => {
    expect(
      getTimeBasedCharacter(BASE_TIME + oneHour * anthemCharacters.length),
    ).toEqual('동');
  });
  it(`should be 해`, () => {
    expect(
      getTimeBasedCharacter(
        BASE_TIME + oneHour * (anthemCharacters.length + 1),
      ),
    ).toEqual('해');
  });
  it(`should be 세`, () => {
    expect(
      getTimeBasedCharacter(
        BASE_TIME + oneHour * (anthemCharacters.length - 1),
      ),
    ).toEqual('세');
  });
});
