'use strict';

// < 데이터 타입 >
// 1. 숫자(number)
let number1 = 2;
const number2 = 1.2;
console.log(number1);
console.log(number2);
console.log(5 / 0);
console.log(-5 / 0);

let nan = 'hello' / 5;
console.log(nan);
console.log(typeof nan);

// 2. 문자열(string)
const name1 = '은요미';
const name2 = `은요미`;
const name = '은요미';
const age = 26;

console.log('안녕하세요 제 이름은 은요미 입니다. 나이는 26살입니다.');
console.log(
  '안녕하세요 제 이름은 ' + name + ' 입니다. 나이는 ' + age + '살입니다.'
);
console.log('------------------------------------------------------');

// 2-1. 백틱(`) → ES6에 도입된 문법
console.log(`안녕하세요 제 이름은 ${name}입니다. 나이는 ${age}살 입니다.`);
const message = `백틱(\`) 기호를 사용하면

이렇게도 표현할 수 있어요`;
console.log(message);

// 2-2. 이스케이프 표현
const hello = "안녕하세요 \n제 이름은 '은요미' 입니다."; // 개행(\n)
console.log(hello);

// 3. 불리언
const isProgramer = true;
const isDesigner = false;
console.log('isProgramer: ', isProgramer);
console.log('isProgramer: ', typeof isProgramer);
console.log('isDesigner: ', isDesigner);
console.log('isDesigner: ', typeof isDesigner);

if (isProgramer) {
  // true
  console.log('프로그래머 입니다.');
} else {
  // false
  console.log('디자이너 입니다.');
}

// 4. 심볼
const TOM_JOB = Symbol('My Job is Programer');
const KIM_JOB = Symbol('My Job is Programer');
console.log(TOM_JOB === KIM_JOB); // false

console.log(KIM_JOB.description);

// 5. null과 undefined
const username = null; // null: 값이 빈 상태를 의도적으로 표현
let message2; // undefined: 값을 할당하지 않은 상태
console.log('username: ', username);
console.log('message2: ', message2);
console.log(typeof username);
console.log(typeof message2);

// 객체 타입(Object Type) = 레퍼런스 타입, 참조 타입이라고도 함
// 객체들은 값을 여러 개 가질 수 있다.
const person = {
  name: '은요미',
  age: 26,
  isProgramer: true,
  say() {
    console.log('JavaScript를 공부해 보아요^^~');
  },
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.length);
arr.push(88);
console.log(arr);
