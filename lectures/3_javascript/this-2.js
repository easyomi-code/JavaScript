'use strict';
// ◎ Arrow Function(화살표 함수, ES6) 에서의 this
// Arrow Function이 나오기 전까지는 어떻게 호출되는지에 따라 this 값을 정의했다.
// Arrow Function에서는 'this'가 자신을 감싸는 외부 함수나 전역 컨텍스트의 this를 상속받는다.
let people = {
  name: '은요미',
  age: 20,
  hello: function () {
    console.log(this); // person 객체
    setTimeout(function () {
      console.log(this); // window 객체
      console.log(this.name);
      console.log(this.age);
    }, 1000);
  },
};
people.hello();

let people1 = {
  name: '은요미',
  age: 20,
  hello: function () {
    // Arrow Function - 자신을 감싸고 있는 Scope에서 this를 상속받음
    setTimeout(() => {
      console.log(this); // person1 객체
      console.log(this.name);
      console.log(this.age);
    }, 1000);
  },
};
people1.hello();

console.log('--------------------------');

// ◎ Arrow Function이 나오기 전에 사용했던 방법
let people2 = {
  name: '은요미',
  age: 20,
  hello: function () {
    let that = this;
    setTimeout(function () {
      console.log(this); // window 객체
      console.log(that.name);
      console.log(that.age);
    }, 1000);
  },
};
people2.hello();

console.log('--------------------------');

// ◎ 화살표 함수를 사용하면 안되는 경우
// 1. 객체 메서드를 선언할 때
let person = {
  name: '홍길동',
  printThis: () => {
    console.log(this); // window 객체
  },
};
person.printThis();

// (1. solution)
let person1 = {
  name: '홍길동',
  printThis: function () {
    console.log(this); // person1 객체
  },
};
person1.printThis();

// 2. addEventListener 함수의 콜백 함수에서 사용할 때
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log(this === window); // => true, window 객체
  this.innerHTML = 'Clicked button';
});

// (2. solution)
let btn1 = document.querySelector('button');
btn1.addEventListener('click', function () {
  console.log(this === btn1); // => true, btn1 객체
  this.innerHTML = 'Clicked button';
});

console.log('--------------------------');

// ◎ Strict Mode에서의 this
// 엄격 모드(Strict Mode)에서는 호출한 놈이 없을 경우 기본값을 window로 하지않고 undefined로 한다.
function printThis() {
  console.log(this); // default this => window
}
printThis(); // 'use strict' => undefined
