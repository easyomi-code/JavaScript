// 연산자 - 어떠한 연산을 수행하는 기호
// 문자열 병합
console.log('Hello ' + 'World!'); // "Hello World! 출력"
console.log('3' + 3); // number → string
console.log(typeof ('3' + 3)); // string 타입
console.log('10' + 0 + 4); // 1004 출력
console.log(3 + 6 + '9'); // 99 출력
console.log(typeof (3 + 6 + '9')); // string 타입

console.log('===========================');

// 산술 연산자(+, -, /, *, %)
let x = 10;
let y = 20;
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(10 % 3);

console.log('===========================');

// 실습1) 사용자로부터 숫자를 입력받아 홀수, 짝수 판별하기
let number = prompt('숫자를 입력해주세요!');
if (number % 2 == 1) {
  alert(`숫자 ${number}은 홀수입니다.`);
} else {
  alert(`숫자 ${number}은 짝수입니다.`);
}

// 증감 연산자(전위 증가, 후위 증가, 전위 감소, 후위 감소)
// ++x, x++, --x, x--
let result = x + y--;
console.log('x: ', x);
console.log('y: ', y);
console.log('result: ', result);

console.log('===========================');

// 비교 연산자 - 피연산자를 서로 비교하고, 비교 결과에 따라 논리 값을 반환한다.
// >, >=, <, <=, ==, ===, !=, !==
// 참: true, 거짓: false
let a = 20;
let b = 10;
console.log(a > b); // true
console.log(a >= b); // true
console.log(a < b); // false
console.log(a <= b); // false
console.log(a == b); // false
console.log(a === b); // false(데이터 타입 까지 비교)
console.log(a != b); // true
console.log(a !== b); // true(데이터 타입 까지 비교)

let num1 = 30;
let num2 = '30';
console.log(num1 == num2); // true - ★★
console.log(num1 === num2); // false(데이터 타입 까지 비교)
console.log(num1 != num2); // false
console.log(num1 !== num2); // true(데이터 타입 까지 비교) - ★★

console.log(0 == false);
console.log(0 === false); // 현업에서 권장하는 방법(===,!==)

console.log('===========================');

// 할당 연산자(=, +=, -=, *=, /=)
let c = 10;
let d = 20;
c += d; // c = c + d
console.log(c);

console.log('===========================');

// 실습2) 1 ~ 10까지 더하기
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i; // sum = sum + i
  console.log(`${i}번째 sum=${sum}`);
}
console.log(`1부터 10까지의 합: ${sum}`);
