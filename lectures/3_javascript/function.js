'use strict';

// 함수(function) - 하나의 단위로 실행할 수 있도록 명령문을 그룹화한 것.
// - 재사용하기 위해 코드를 그룹화한 것.

// 함수 선언식(호이스팅 영향O - 선언 전에 사용 가능)
// function helloA() {
//   console.log('이름과 나이를 출력해 주세요.');
//   console.log('이름: 은요미, 나이: 26');
// }
// helloA();

// // 함수 표현식(호이스팅 영향X)
// const helloB = function () {
//   console.log('이름과 나이를 출력해 주세요.');
//   console.log('이름: 은요미, 나이: 26');
// };
// helloB();

// 파라미터 - 함수 호출시 값 전달(외부에서 값을 전달받음)
const sayHello = function (name, age) {
  console.log('이름과 나이를 출력해 주세요.');
  console.log(`이름: ${name}, 나이: ${age}세`);
};
sayHello('은요미', 26);
sayHello('홍길동', 32);

// 반환 값 - return 키워드를 사용하여 함수에서 값을 반환
function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(5, 3);
console.log('result: ', result);

// 함수 스코프(전역 스코프, 블록 스코프)
function aFunc() {
  let name = '짐코딩';
  let age = 20;
  function bFunc() {
    let job = '개발자';
    console.log('bFunc_name: ', name);
    console.log('bFunc_age: ', age);
    console.log('bFunc_job: ', job);
  }
  bFunc();
  console.log('aFunc_name: ', name);
  console.log('aFunc_age: ', age);
  // console.log('job: ', job); // 함수 스코프도 해당 블록에서 선언된 변수만 접근할 수 있다.
}
aFunc();

// 익명함수 - 이름이 없는 함수(재활용 필요 X)
let fruits = ['사과', '바나나', '딸기'];
fruits.forEach(function (item) {
  console.log('item: ', item);
});

// 즉시 실행 함수
(function () {
  console.log('hello');
})();
