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
import { getTimeBasedCharacter } from '@chinsun9/time-based-sequence-character';

const char = getTimeBasedCharacter(new Date().getTime());
console.log({ char });
```
