let person1 = {
  fullname: '홍길동1',
  age: 20,
  printThis: function () {
    console.log(this); // {fullname: '홍길동', age: 20, printThis: ƒ}
    console.log('this === person1: ', this === person1); // true
    // console.log(this.fullname); // 홍길동
    // console.log(this.age); // 20
  },
};
person1.printThis();

let person2 = {
  fullname: '홍길동2',
  age: 20,
  printThis: function () {
    console.log(this); // Window
    console.log('this === person2: ', this === person2); // false
    console.log('this === window: ', this === window);
  },
};
let printThis = person2.printThis;
printThis();

console.log('--------------------------');

// ◎ 'this'는 호출한 놈
// 호출한 놈이 없다 ⇒ 함수 앞에 특정 객체가 없다.(전역 함수 호출)
function printThis1() {
  console.log(this); // default this ⇒ window
}
printThis1();

let person3 = {
  name: '신형만',
  printThis1: printThis1,
};
person3.printThis1();

let person4 = {
  name: '봉미선',
  printThis1: printThis1,
};
person4.printThis1();

let person5 = {
  name: '신짱구',
  printThis1: printThis1,
};
person5.printThis1();

// window
let btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log(this);
  console.log(this === btn);
});

console.log('--------------------------');

// ◎ ES5 bind - bind 함수로 this를 설정할 수 있다.
function print() {
  console.log('this: ', this); // default this ⇒ window
}
let people1 = {
  name: '유명한',
};

let people2 = {
  name: '유미란',
};

let printThis4 = print.bind(people1);
let printThis5 = print.bind(people2); // bind는 단 한 번만 사용할 수 있다. ★
printThis4();

// < bind 예제 실습 >
let people3 = {
  name: '은요미',
  age: 20,
  hello: function () {
    function printHello() {
      console.log(this);
      console.log(this.name);
      console.log(this.age);
    }
    setTimeout(printHello.bind(this), 1000); // 1s → 1초 후에 함수 실행
  },
};
people3.hello();

console.log('--------------------------');

// ◎ 함수 호출 방식에 따른 'this'의 동작 - 출처: ChatGPT
// 1. 전역 함수 호출(Global Function Call)
// 함수가 전역 범위에서 호출되면, 'this'는 전역 객체를 참조한다.
function printThis2() {
  console.log(this); // 전역 객체 (브라우저에서는 window, Node.js 에서는 global)
}
printThis2(); // 전역 컨텍스트에서 호출

// 2. 메서드 호출(Method Call)
// 함수가 객체의 메서드로 호출되면, 'this'는 해당 메서드를 소유한 객체를 참조한다.
const obj = {
  printThis2: function () {
    console.log(this); // obj
  },
};
obj.printThis2(); // obj의 컨텍스트에서 호출

// 3. 생성자 호출(Constructor Call)
// 함수가 'new' 키워드와 함께 생성자 함수로 호출되면, 'this'는 새로 생성된 객체 인스턴스를 참조한다.
function MyConstructor() {
  console.log(this); // 새로 생성된 객체 인스턴스
}
const instance = new MyConstructor();

// 4. 명시적 호출(Explicit Call)
// 'call', 'apply', 'bind' 메서드를 사용하여 'this'를 명시적으로 설정할 수 있다,
function printThis3() {
  console.log(this);
}
const obj3 = { name: '남도일' };
printThis3.call(obj3); // obj를 this로 설정하여 호출
