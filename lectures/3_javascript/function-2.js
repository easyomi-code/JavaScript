'use strict';
// 파라미터 기본값(ES6 추가) - 매개변수에 기본값(default value) 지정
function sum(num1, num2) {
  console.log('num1: ', num1); // 5
  console.log('num2: ', num2); // undefined
  const result = num1 + num2;
  console.log('결과값: ', result);
}
sum(5); // NaN(Not a Number)

function sum(num1 = 0, num2 = 0) {
  console.log('num1: ', num1); // 5
  console.log('num2: ', num2); // 0
  const result = num1 + num2;
  console.log('결과값: ', result);
}
sum(5); // 5

console.log('--------------------------');

// Arrow Function(ES6 추가) - 화살표 표기법(Arrow Function) ★★
const hello1 = function () {
  console.log('Hello(1)');
};
hello1();

const hello2 = () => {
  console.log('Hello(2)');
};
hello2();
