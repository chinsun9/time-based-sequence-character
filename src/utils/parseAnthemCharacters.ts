import fs from 'fs';
import path from 'path';

const origin = fs.readFileSync(path.join(__dirname, '../anthem.txt'), {
  encoding: 'utf-8',
});
console.log({ origin });

const chs = origin.split('').filter((ch) => ch.trim().length > 0);

console.log({ chs });
console.log(chs.length);

fs.writeFileSync(path.join(__dirname, '../anthem.json'), JSON.stringify(chs));

console.log(`done`);
