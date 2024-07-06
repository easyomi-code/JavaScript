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
// console.log(people.name); // 점 표기법
// console.log(people.name[0]); // Bob
// console.log(people.name[1]); // Smith
// people.hello(); // hello 메서드 호출
// console.log(people.hobby.name); // programming
// people.hobby.alert();

// console.log(people['name']); // 괄호 표기법
// console.log(people['name'][0]); // Bob
// console.log(people['name'][1]); // Smith
// people['hello'](); // hello 메서드 호출
// console.log(people['hobby']['name']); // programming
// people['hobby']['alert']();

// ◎ 객체 프로퍼티 동적으로 생성 및 제거
// 프로퍼티 생성 및 변경
people['name'][0] = '은요미';
console.log(people.name[0]);

// 프로퍼티 제거
delete people.name;
delete people['age'];
console.log(people);

console.log('--------------------------');

// ◎ 함수 파라미터로 객체 전달하기 - 코드 클린 하게 만들 수 있음
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
