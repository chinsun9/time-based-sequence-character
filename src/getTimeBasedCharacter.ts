import anthemCharacters from './anthem.json';
import { BASE_TIME } from './baseTime';

function getTimeBasedCharacter(time: number) {
  // 1시간 간격으로 시퀀스
  const gap = 3600; // 단위 ; 초 // 1초 * 60 * 60 === 1시간

  const n = Math.floor(time / (gap * 1000));
  const base = Math.floor(BASE_TIME / (gap * 1000));

  const seq = (n - base) % anthemCharacters.length;
  return anthemCharacters[seq];
}

export { getTimeBasedCharacter };
