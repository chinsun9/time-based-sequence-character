# time-based-sequence-character

> 시간 베이스로 문자열 반환

- 매시간마다 애국가를 한 음절을 반환합니다
- 기준 시간은 `2021. 9. 24. 오후 5:46:16`로부터 시작합니다

## Install

```sh terminal
npm install @chinsun9/time-based-sequence-character
```

## Usage

```ts example.ts
// example
import { getTimeBasedCharacter } from '@chinsun9/time-based-sequence-character';

// 한 시간마다 애국가 한 음절을 반환
const char = getTimeBasedCharacter(new Date().getTime());
console.log({ char });
```

```ts custom example.ts
// custom example
import { TimeBasedSequenceCharacter } from '@chinsun9/time-based-sequence-character';

// 현재 시간을 기준으로 10초마다 '0', '1', '0', '1', '0', '1',...
const curTime = new Date().getTime();
const tbsc = new TimeBasedSequenceCharacter(curTime, 10, ['0', '1']);
const char = tbsc.getTimeBasedCharacter(curTime);
console.log({ char }); // { char: '0' }

const postChars = [1, 2, 3, 4, 5]
  .map((v) => v * 10 * 1000 + curTime)
  .map((time) => tbsc.getTimeBasedCharacter(time));
console.log({ postChars }); // { postChars: [ '1', '0', '1', '0', '1' ] }
```
