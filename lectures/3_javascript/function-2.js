'use strict';
// 파라미터 기본값(ES6 추가) - 매개변수에 기본값(default value) 지정
function sum1(num1, num2) {
  console.log('num1: ', num1); // 5
  console.log('num2: ', num2); // undefined
  const result = num1 + num2;
  console.log('결과값: ', result);
}
sum1(5); // NaN(Not a Number)

function sum2(num1 = 0, num2 = 0) {
  console.log('num1: ', num1); // 5
  console.log('num2: ', num2); // 0
  const result = num1 + num2;
  console.log('결과값: ', result);
}
sum2(5); // 5

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

// 매개변수가 하나라면 괄호() 생략 가능
// 함수 바디에 표현식이 하나라면 중괄호{}, return문 생략 가능
const hello3 = name => console.log(`Hello ${name}~!`);
hello3('Yomi');

const hello4 = name => `Hello ${name}~!`;
const str = hello4('Yomi');
console.log(str)

console.log('--------------------------');

// 콜백 함수(Callback Function) - 다시 호출되는 함수
// 다른 함수의 인자로 전달되는 함수
let fruits = ['사과', '바나나', '딸기'];
fruits.forEach(function(item, index){
  console.log('item: ', item)
});

fruits.forEach(printItem)
function printItem(item, index){
  console.log('item: ', item)
}

// 콜백 함수, Arrow Function
fruits.forEach((item, index) => {
  console.log('item: ', item)
})

console.log('--------------------------');

// 함수 명명 규칙
// • 변수 -> 명사로(person, age, username)
// • 함수 -> 동사로 짓는 것이 좋다!
// ex) addItem, removeItem

console.log('--------------------------');

// 콜백 함수 예제(이해가 잘 안돼서 가져옴, 출처: ChatGPT)
// 1. 매개변수(Parameter): 함수를 정의할 때 사용하는 변수. 함수가 호출될 때 인자를 받을 자리 표시.
// 2. 인자(Argument): 함수를 호출할 때 함수에 실제로 전달되는 값.

// 콜백 함수 : greeting
function greeting(name) {  // name은 greeting 함수의 매개변수
  console.log('Hello ' + name);
}

function processUserInput(callback) { // callback은 processUserInput 함수의 매개변수
  const name = 'Alice';
  callback(name); // name은 인자('Alice'), callback 함수에 name 인자('Alice')를 전달
}

processUserInput(greeting); // greeting은 인자

// < 코드 실행 흐름 >
// 1. processUserInput 함수가 greeting 함수를 인자로 받아 호출된다.
// 2. processUserInput 함수 내부에서 callback 매개변수는 greeting 함수를 가르킨다.
// const name = 'Alice'에 의해 name 변수는 Alice로 설정된다.
// 3. callback(name) 호출은 greeting(Alice)와 동일하다.
// 따라서 greeting 함수가 호출되고, Alice가 name 매개변수로 전달된다.
// 4. console.log('Hello ' + name) => Hello Alice 출력

// ★ 매개변수(Parameter) -> 함수를 정의할 때 사용하는 변수(인자를 받을 자리)
// ★ 인자(Argument) -> 함수를 호출할 때 전달되는 값