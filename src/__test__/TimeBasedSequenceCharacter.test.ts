import { BASE_TIME } from '../baseTime';
import { TimeBasedSequenceCharacter } from '../TimeBasedSequenceCharacter';

describe('인자없이 테스트', () => {
  const tbsc = new TimeBasedSequenceCharacter();

  it(`should ${BASE_TIME}`, () => {
    expect(tbsc.baseTime).toEqual(BASE_TIME);
  });

  it('should 0', () => {
    tbsc.baseTime = 0;
    expect(tbsc.baseTime).toEqual(0);
  });

  it('should 동', () => {
    tbsc.baseTime = 0;
    expect(tbsc.getTimeBasedCharacter(0)).toEqual('동');
  });
});

describe('baseTime, gap 인자 테스트', () => {
  const tbsc = new TimeBasedSequenceCharacter(0, 1000);
  const getTimeBasedCharacterWithSecond = (s: number) =>
    tbsc.getTimeBasedCharacter(s * 1000);

  it(`should ${0}`, () => {
    expect(tbsc.baseTime).toEqual(0);
  });

  it('should 동', () => {
    expect(getTimeBasedCharacterWithSecond(10)).toEqual('동');
    expect(getTimeBasedCharacterWithSecond(999)).toEqual('동');
  });

  it('should 해', () => {
    expect(getTimeBasedCharacterWithSecond(1001)).toEqual('해');
    expect(getTimeBasedCharacterWithSecond(1999)).toEqual('해');
  });

  it('should 동', () => {
    tbsc.baseTime = new Date().getTime();
    expect(tbsc.getTimeBasedCharacter(new Date().getTime())).toEqual('동');
  });
});

describe('arr 인자 테스트', () => {
  const tbsc = new TimeBasedSequenceCharacter(0, 10, ['0', '1']);
  const getTimeBasedCharacterWithSecond = (s: number) =>
    tbsc.getTimeBasedCharacter(s * 1000);

  it('should 0', () => {
    expect(getTimeBasedCharacterWithSecond(0)).toEqual('0');
    expect(getTimeBasedCharacterWithSecond(9)).toEqual('0');
    expect(getTimeBasedCharacterWithSecond(20)).toEqual('0');
    expect(getTimeBasedCharacterWithSecond(40)).toEqual('0');
  });

  it('should 1', () => {
    expect(getTimeBasedCharacterWithSecond(10)).toEqual('1');
    expect(getTimeBasedCharacterWithSecond(19)).toEqual('1');
    expect(getTimeBasedCharacterWithSecond(30)).toEqual('1');
    expect(getTimeBasedCharacterWithSecond(50)).toEqual('1');
  });

  it('should 0', () => {
    tbsc.baseTime = new Date().getTime();
    expect(tbsc.getTimeBasedCharacter(new Date().getTime())).toEqual('0');
  });
});
