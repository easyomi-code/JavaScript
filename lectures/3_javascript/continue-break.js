'use strict';

// 제어문 - 3. 분기문
// 멈추거나 빠져나가거나 계속 진행하거나 되돌아가거나 하는 동작
let text1 = '';
//console.log(1 + 2);
//console.log('eunyomi ' + 'hello~!');
//console.log('javascript' + 2);

// continue 문
for (let i = 0; i < 10; i++) {
  // 중간의 숫자를 빼고 싶을 때
  if (i == 3) {
    continue;
  }
  text1 = text1 + i;
  //console.log(`text[${i}]: `, text);
}
console.log(text1);

console.log('------------------');

// break 문
let text2 = '';
for (let i = 0; i < 10; i++) {
  // for 문을 끝내고 싶을 때
  if (i == 3) {
    break;
  }
  text2 = text2 + i;
}
console.log(text2);
