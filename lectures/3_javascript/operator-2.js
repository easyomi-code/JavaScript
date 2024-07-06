// 논리 연산자(AND, OR, NOT)
// JavaScript는 다른 언어와 다르게 피연산자가 불리언(boolean) 타입이 아닐때도 논리 연산이 가능하다.
// 값이 있는 것을 true로 간주하기 때문

let x = true;
let y = false;

// AND(&&) 연산 - 모두 true일 경우에 true 반환, 나머지 false
console.log(x && y); // false
console.log(true && true); // true
console.log('Hello' && 'JavaScript'); // JavaScript
console.log(false && 'true'); // false

console.log('===========================');

// OR(||) 연산 - 둘 중 하나라도 true이면 true 반환, 나머지 false
console.log(x || y); // true
console.log(false || false); // false
console.log('Hello' || 'JavaScript'); // Hello
console.log(false || 'Easyomi'); // Easyomi
console.log('Code' || false); // Code

console.log('===========================');

// NOT(!) 연산 - true이면 false, false이면 true 반환
console.log(!x); // false
console.log(!y); // true
console.log(!'Eunyomi'); // false

console.log('===========================');

// 실습1) HTML 요소를 가져와 로그인 유효성 테스트 하기
let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');
btn.addEventListener('click', function () {
  // alert('Hello!'); // test용 코드
  let email = emailEl.value;
  let password = passwordEl.value;
  console.log('email: ', email);
  console.log('password: ', password);
  //console.log('!password: ', !password);

  // email, password 값 유효성 테스트
  if (email === '' || email.includes('@') === false) {
    console.log('이메일이 유효하지 않습니다!');
  } else if (!password) {
    // password === false(값이 없을때), !password === true / password === '' 와 같음
    console.log('비밀번호를 입력해주세요!');
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    console.log('비밀번호 재설정 필요!(8~16자 이내)');
  } else {
    console.log('로그인 성공!');
  }
});

console.log('===========================');

// 삼항 연산자 - 조건식? 값1 : 값2
// true 이면 값1 반환, false 이면 값2 반환
let number = 7;
let message = null;
if (number % 2 === 1) {
  message = '홀수 입니다.';
} else {
  message = '짝수 입니다.';
}
console.log(message);

let print = number % 2 === 1 ? '홀수 입니다.' : '짝수 입니다.';
console.log(print);
