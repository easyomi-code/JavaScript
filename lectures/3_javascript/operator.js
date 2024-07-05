// 연산자 - 어떠한 연산을 수행하는 기호이다.
// 문자열 병합
console.log('Hello ' + 'World!'); // "Hello World! 출력"
console.log('3' + 3); // number → string
console.log(typeof ('3' + 3)); // string 타입
console.log('10' + 0 + 4); // 1004 출력
console.log(3 + 6 + '9'); // 99 출력
console.log(typeof (3 + 6 + '9')); // string 타입

console.log('===========================');

// 산술 연산자
let x = 10;
let y = 20;
// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x * y);
// console.log(10 % 3);

// 실습) 사용자로부터 숫자를 입력받아 홀수, 짝수 판별하기
// let number = prompt('숫자를 입력해주세요!');
// if (number % 2 == 1) {
//   alert(`숫자 ${number}은 홀수입니다.`);
// } else {
//   alert(`숫자 ${number}은 짝수입니다.`);
// }

// 증감 연산자(전위 증가, 후위 증가, 전위 감소, 후위 감소)
let result = x + y--;
console.log('x: ', x);
console.log('y: ', y);
console.log('result: ', result);

// 비교 연산자 - 피연산자를 서로 비교하고, 비교 결과가 참인지에 따라 논리 값을 반환한다.
// 참: true, 거짓: false
let a = 20;
let b = 10;
console.log(a > b); // true
console.log(a >= b); // true
console.log(a < b); // false
console.log(a <= b); // false
