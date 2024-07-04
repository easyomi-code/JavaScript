'use strict';

// 제어문 - 2. 반복문(for loop)
// for 문 - 정해진 숫자만큼 반복할 때 사용
// for (초기화; 조건식; 표현식)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let fruits = ['사과', '딸기', '포도', '바나나', '귤'];
//console.log(fruits[0]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for ... in (ES6)
let person = {
  name: '은요미',
  age: 26,
  job: 'programmer',
};
//console.log(person.name);
//console.log(person['age']);

//let key = prompt('어떤 값을 출력 할까요? (key 입력)');
//console.log(person[key]); // key 입력값에 상응하는 값 출력

let keys = Object.keys(person);
console.log(keys); // 배열로 출력 ['name', 'age', 'job']

for (let i = 0; i < keys.length; i++) {
  //console.log(keys[i]);
  let key = keys[i];
  console.log(person[key]);
}

console.log('--------------');

for (let key in person) {
  //console.log(key);
  console.log(person[key]);
}

console.log('--------------');

// for ... of (ES6)
for (let fruit of fruits) {
  console.log(fruit);
}
