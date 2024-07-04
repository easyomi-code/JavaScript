'use strict';

// 제어문 - 2. 반복문(while loop)
// while 문 - 반복 횟수를 알 수 없을 때 사용
console.log('while 문');
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

console.log('-----------');
// do-while 문 - 최초 한 번은 무조건 수행
console.log('do-while 문');
let number = 0;
do {
  console.log(number);
  number++;
} while (number < 5);
