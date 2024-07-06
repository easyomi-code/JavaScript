'use strict';
// 프리미티브 타입이 아닌 것들을 객체 타입 또는 참조 타입이라고 한다.

// ◎ 원시 타입(Primitive type)
// 프리미티브 타입 값을 다른 변수에 할당하면 값 자체를 넘겨주기 때문에 값의 원형은 변화가 없다.
// ex) number, string, boolean, null, undefined, symbol, bigint 등
let username = '은요미';
console.log(username); // 은요미
changeName(username); // 홍길동
console.log(username); // 은요미

function changeName(name) {
  name = '홍길동';
  console.log(name);
}

console.log('--------------------------');

// ◎ 객체 타입 = 참조 타입(Reference type)
// 하지만 객체 타입을 다른 변수에 할당하면 참조 값이 할당되기 때문에
// 할당받은 변수에서 속성을 변경하면 값의 원형이 변경된다.
// ex) 객체(Object), 배열(Array), 함수(Function) 등
let person = {
  name: '남도일',
  age: 18,
};

console.log(person); // {name: '남도일', age: 18}
changePersonName(person);
console.log(person); // {name: '유명한', age: 40}

function changePersonName(person) {
  person.name = '유명한';
  person.age = 40;
}

console.log('--------------------------');

// ◎ Call By Value vs Call By Reference
