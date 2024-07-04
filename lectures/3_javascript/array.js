'use strict';

// // 1. 배열 생성
// // 배열 리터럴 표기법(array literal syntax)
// const fruits = ['사과', '딸기', '수박', '참외'];
// console.log(fruits);

// // 배열 생성자 표기법(array constructor syntax)
// // const fruits2 = new Array('사과', '딸기', '수박', '참외');
// // console.log(fruits2);

// // 2. 배열 접근
// console.log(fruits[0]); // 사과
// console.log(fruits[1]); // 딸기
// fruits[2] = '포도'; // 수박 → 포도
// console.log(fruits);

// // 3. 자주 사용하는 배열 API(프로퍼티, 메서드)
// // length: 배열의 길이
// console.log('fruits.length: ', fruits.length);
// console.log('마지막 값: ', fruits[fruits.length - 1]);

// // push(): 배열 끝에 항목 추가하기
// fruits.push('귤');
// console.log(fruits);

// // forEach(): 배열의 항목을 순환하며 처리/ 함수를 매개변수로 넣는다
// fruits.forEach(function (item, index) {
//   console.log(index, item);
// });

// // pop(): 배열 끝에 항목 제거
// // fruits.pop();
// // let removedItem = fruits.pop();
// // console.log('removedItem: ', removedItem);
// // console.log('제거완료: ', fruits);

// // shift(): 배열 앞에 항목 제거
// // fruits.shift();
// // console.log('제거완료: ', fruits);

// // unshift(): 배열 앞에 항목 추가
// fruits.unshift('수박');
// console.log(fruits);

// // indexOf(): 배열 안 항목의 인덱스(index) 찾기
// const index = fruits.indexOf('참외');
// console.log('index: ', index);
// const noindex = fruits.indexOf('파인애플');
// console.log('index: ', noindex);

// // splice(): 인덱스 위치에 있는 항목 제거
// // fruits.splice(1, 2);
// const findIndex = fruits.indexOf('참외');
// console.log('findIndex: ', findIndex);
// fruits.splice(findIndex, 1);
// console.log(fruits);

// // 4. 구조 분해 할당(Distructuring assignment)
// // 일반 - 배열 항목을 개별 변수에 담을 때
// let fruits = ['사과', '딸기', ' 바나나'];
// // let apple = fruits[0];
// // let strawberry = fruits[1];
// // let banana = fruits[2];

// // 구조 분해 할당 - 배열 항목을 개별 변수에 담을 떄
// let [apple, strawberry, banana, ...others] = [
//   '사과',
//   '딸기',
//   ' 바나나',
//   'a',
//   'b',
//   'c',
// ];
// console.log(apple);
// console.log(strawberry);
// console.log(banana);
// console.log(others);

// 5. Spread syntax(전개 구문)
// let fruits1 = ['사과', '딸기', ' 바나나'];
// let fruits2 = ['복숭아', '체리'];
// let items = [...fruits1, ...fruits2];
// // let items = ['ABC', ...fruits, 'D', 'EFG'];
// console.log(items);

// 6. Rest parameter
// print('a', 'b', 'c', 'd', 'e', 'f');

// function print(...values) {
//   values.forEach(function (value, index) {
//     console.log('index: ', index, 'value: ', value);
//   });
// }

// function print(...values){

// }

// 7. 배열 복사
// 얕은 복사(Shallow copy)
// let source = ['사과', '딸기', ' 바나나'];
// let target = source;
// target[0] = '파인애플'; // 같은 참조값을 갖고 있기 때문에 source[0]도 함께 변경
// console.log('source: ', source);
// console.log('target: ', target);

// 깊은 복사(Deep copy)
let source = ['사과', '딸기', ' 바나나'];
// let target = [...source]; // -(1) 전개 구문
// let target = Array.from(source); // -(2) Array.from
let target = source.slice(); // -(3) slice
target[0] = '파인애플';
console.log('source: ', source);
console.log('target: ', target);
