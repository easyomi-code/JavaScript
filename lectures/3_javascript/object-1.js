'use strict';
// 객체(Object) - 연관된 데이터를 담는 그릇
// 객체는 키(key)와 값(value)으로 구성되어 있으며 중괄호{}로 표현한다.
// 객체는 여러 데이터를 담은 컨테이너 역할을 한다.
// 값은 변화가 있을 수 있지만, 컨테이너가 바뀌는 건 아니다.

// < 용어 정리 >
// 1. 프로퍼티(Property) - 객체가 가지고 있는 값
// 2. 메서드(Method) - 객체가 가지고 있는 함수

// ◎ 객체 생성 - 객체 리터럴 방식, 객체 생성자 방식
// 1. 객체 리터럴 방식(object literal syntax)
const person = {
  name: '은요미',
  age: '26',
};
console.log(person);

// 2. 객체 생성자 방식(object constructor syntax)
const obj = new Object();
obj.name = '홍길동';
obj.age = 20;
console.log(obj);

console.log('--------------------------');

// ◎ 객체 프로퍼티 접근 - 객체 안에 있는 프로퍼티나 함수에 접근하기 위한 방법이 두 가지 있다.
// 1. 점 표기법 - ex) person.name, person.age
// 2. 괄호 표기법 - ex) person['name'], person['age']

const people = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'health'],
  hello: function () {
    alert('Hello!');
  },
  greeting: function () {
    alert('Hi!');
  },
  hobby: {
    name: 'programming',
    alert: function () {
      alert('programming');
    },
  },
};
console.log(people.name); // 점 표기법
console.log(people.name[0]); // Bob
console.log(people.name[1]); // Smith
people.hello(); // hello 메서드 호출
console.log(people.hobby.name); // programming
people.hobby.alert();

console.log(people['name']); // 괄호 표기법
console.log(people['name'][0]); // Bob
console.log(people['name'][1]); // Smith
people['hello'](); // hello 메서드 호출
console.log(people['hobby']['name']); // programming
people['hobby']['alert']();

// ◎ 객체 프로퍼티 동적으로 생성 및 제거
// 프로퍼티 생성 및 변경
people['name'][0] = '은요미';
console.log(people.name[0]);

// 프로퍼티 제거
delete people.name;
delete people['age'];
console.log(people);

console.log('--------------------------');

// ◎ 함수 파라미터로 객체 전달하기 - 코드 클린하게 만들 수 있음
function printPerson(name, age, hobby) {
  console.log(
    `제 이름은 ${newPerson.name}이며, 나이는 ${newPerson.age}살, 취미는 ${newPerson.hobby} 입니다.`
  );
}
const newPerson = {
  name: '남도일',
  age: 18,
  hobby: '추리소설 읽기',
};
printPerson(newPerson);

console.log('--------------------------');

// ◎ 구조 분해 할당(Distructuring assignment)
// - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식

// 1. 일반 - 객체 속성을 개별 변수에 담을 때
// const name = newPerson.name;
// const age = newPerson.age;
// const hobby = newPerson.hobby;
// console.log(`name: ${name}, age: ${age}, hobby: ${hobby}`);

// 2. 구조 분해 할당 - 객체 속성을 개별 변수에 담을 때
const { name, age, hobby } = newPerson;
console.log(`name: ${name}, age: ${age}, hobby: ${hobby}`);

// 3. 구조 분해 할당 - 함수에서 객체 개별 속성을 받을 때
function printPerson({ name, age, hobby }) {
  console.log(
    `제 이름은 ${name}이며, 나이는 ${age}살, 취미는 ${hobby} 입니다.`
  );
}
const whoPerson = {
  name: '유미란',
  age: 18,
  hobby: '태권도',
};
printPerson(whoPerson);

console.log('--------------------------');

// ◎ 팩토리 함수
// ex) 같은 유형의 객체를 반복해서 생성해야 할 때
// 코드가 길어져 가독성이 떨어지고, 타이핑을 많이 해야 한다는 번거로움이 있다. ⇒ 해결책: 팩토리 함수
// const person1 = {
//   name: '짱구',
//   age: '10',
//   hobby: '액션가면 시청',
// };
// const person2 = {
//   name: '철수',
//   age: '20',
//   hobby: '피규어 모으기',
// };
// const person3 = {
//   name: '유리',
//   age: '30',
//   hobby: '소꿉놀이',
// };

// 팩토리 함수 - 객체를 반환하는 함수
function createPerson(name, age, hobby) {
  return {
    // name: name
    name, // key와 value가 동일할 때는 한 번만 표기할 수 있다.(단축 속성명-ES6)
    age: age,
    hobby: hobby,
  };
}
const person1 = createPerson('짱구', '10', '액션가면 시청');
const person2 = createPerson('철수', '11', '피규어 모으기');
const person3 = createPerson('유리', '12', '소꿉놀이');
const person4 = createPerson('훈이', '13', '레어템 모으기');
const person5 = createPerson('맹구', '14', '돌멩이 수집');
printPerson(person1);
printPerson(person2);
printPerson(person3);
printPerson(person4);
printPerson(person5);

console.log('--------------------------');

// ◎ 함수 클래스를 사용한 객체 생성(ES5)
// 규칙: 객체를 생성하는 함수의 첫 글자는 대문자
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}
const person6 = new Person('코난', 8, '추리');
printPerson(person6);

console.log('--------------------------');

// ◎ 클래스를 사용한 객체 생성(ES6)
class Person1 {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
}
const person7 = new Person1('은요미', 26, '코딩');
printPerson(person7);
