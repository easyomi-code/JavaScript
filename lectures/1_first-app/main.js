console.log('Hello!!!');
console.log('hello');
console.log('hello', 'eunyomi', 'javascript');

// alert('Hello Eunyomi~');
/* 
console.log('Hello!!!');
console.log('hello');
console.log('hello', 'eunyomi', 'javascript'); 
*/

// 변수: let → 다양한 값을 저장할 수 있다.
let str = 'Hello Javascript~!';
let number = 20;
console.log('문자열: ', str);
console.log('숫자: ', number);

// 함수: function → 코드를 편하게 재사용하기 위해 그룹화 함
function sayEunyomi() {
  console.log('Eunyomi1');
  console.log('Eunyomi2');
  console.log('Eunyomi3');
}

sayEunyomi();
console.log('--------');
sayEunyomi();

// 객체: {중괄호} → 변수와 함수를 갖고 있는 것
let obj = {
  number: 30, // 객체가 갖고 있는 변수 → 프로퍼티(속성)
  sayEunyomi: function () {
    console.log('obj>Eunyomi1');
    console.log('obj>Eunyomi2');
    console.log('obj>Eunyomi3');
  },
};

console.log(obj);
console.log(obj.number);
obj.sayEunyomi();
