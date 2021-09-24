export function printTime() {
  const curTime = new Date();
  const curTimeString = curTime.toLocaleString('ko-KR');
  const curUnixTime = curTime.getTime();

  console.log({ curTimeString, curUnixTime });
}
