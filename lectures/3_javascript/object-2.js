'use strict';
// 프리미티브 타입이 아닌 것들을 객체 타입 또는 참조 타입이라고 한다.

// ◎ 원시 타입(Primitive type)
// 프리미티브 타입 값을 다른 변수에 할당하면 값 자체를 넘겨주기 때문에 값의 원형은 변화가 없다.
// ex) number, string, boolean, null, undefined, symbol, bigint 등

// ◎ Call By Value(값에 의한 호출) - 값의 원형 변화X
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

// ◎ Call By Reference(참조에 의한 호출) - 값의 원형 변화O
let person = {
  name: '남도일',
  age: 18,
};

console.log(person); // {name: '남도일', age: 18}
changePersonName(person);
console.log(person); // {name: '유명한', age: 40}

function changePersonName(people) {
  people.name = '유명한';
  people.age = 40;
}

console.log('--------------------------');

// ◎ Spread operator(전개 구문)
// 객체를 할당할 때 참조값을 할당 하는게 아닌 객체안의 프로퍼티를 펼치는 방식으로 할당(...)
// 1. 객체인 경우
let obj = {
  name: '남도일',
  age: 18,
};
let people = {
  ...obj,
  hobby: '추리소설 읽기',
};
console.log(people); // {name: '남도일', age: 18, hobby: '추리소설 읽기'}

// 2. 배열인 경우
let arr = [1, 'two', 3, 'four'];
let numArr = [...arr, 5, 'six'];
console.log(numArr); // [1, 'two', 3, 'four', 5, 'six']

console.log('--------------------------');

// ◎ 객체 복사
// Call By Reference에서 보았듯이 객체는 쉽게 복사 되지 않는다.
// 객체 복사 방법

// 1. Spread operator(전개 구문)를 이용한 복사
// 전개 구문은 참조값을 할당하는 방식이 아닌 객체에서 속성을 펼치는(Spread) 방식이기 떄문에 객체 복사가 가능하다.
let person1 = {
  name: '짱구',
  age: 7,
};
let person2 = { ...person1 };
person2.name = '철수';
console.log(person1); // {name: '짱구', age: 7}
console.log(person2); // {name: '철수', age: 7}

// 2. Object.assign()
// JavaScript 내장 객체인 Object의 assign() 메서드를 사용하여 복사할 수 있다.
let person3 = Object.assign({}, person1);
person3.name = '유리';
person3.age = 8;
console.log(person3); // {name: '유리', age: 8}

console.log('--------------------------');

// ◎ for ... in - 객체(object)에 있는 키 항목들을 반복적으로 반환한다.
const newPerson = {
  name: '은요미',
  age: 26,
  job: '개발자',
};
for (let key in newPerson) {
  console.log(`key: ${key}, value: ${newPerson[key]}`);
}
// < 출력 결과 >
// key: name, value: 은요미
// key: age, value: 26
// key: job, value: 개발자

console.log('--------------------------');

// ◎ 키 존재 여부 확인
// 1. in operator - key in object
console.log('name' in newPerson); // true
if ('name' in newPerson) {
  console.log(`'name'이 정의되어 있습니다.`);
} else {
  console.log(`'name'이 정의되어 있지 않습니다.`);
}

// 2. Object.hasOwn(), obj.hasOwnProperty()
console.log(Object.hasOwn(person, 'name')); // true
console.log(newPerson.hasOwnProperty('name')); // true

// 3. if문 에서 바로 속성에 접근
if (newPerson.name) {
  console.log(`'name'이 정의되어 있습니다.`);
} else {
  console.log(`'name'이 정의되어 있지 않습니다.`);
}
