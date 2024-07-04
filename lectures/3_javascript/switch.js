'use strict';

// 제어문 - 1. 조건문
// switch 문
let subject = 'html';
switch (subject) {
  case 'javascript':
    console.log('javascript 안녕');
    let result = 1 + 2;
    console.log('result: ', result);
    break;
  case 'html':
    console.log('html 안녕');
  //break;
  case 'css':
    console.log('css 안녕');
    break;
  default:
    console.log('default 수행문 입니다.');
}

console.log('switch문 종료!');

/* < 실습 문제 >
 * 수학 점수를 입력 받아서
 * 점수 >= 90 → 'A 학점 입니다.'
 * 점수 >= 70 → 'B 학점 입니다.'
 * 점수 >= 50 → 'C 학점 입니다.'
 * 그 외의 점수는 'D 학점 입니다.'
 */

let score = prompt('수학 점수를 입력해주세요!');
// Math.floor() : 주어진 숫자보다 크지 않은 가장 큰 정수를 반환
let value = Math.floor(score / 10);
switch (value) {
  case 10:
  case 9:
    console.log(`점수: ${score}, A 학점 입니다.`);
    break;
  case 8:
  case 7:
    console.log(`점수: ${score}, B 학점 입니다.`);
    break;
  case 6:
  case 5:
    console.log(`점수: ${score}, C 학점 입니다.`);
    break;
  default:
    console.log(`점수: ${score}, D 학점 입니다.`);
}
console.log('switch문 종료!');
