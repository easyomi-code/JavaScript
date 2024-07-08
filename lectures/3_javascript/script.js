// ◎ script 로드 문제점
// console.log('Hello World!');
// let btn1 = document.querySelector('#btn1');
// console.log('btn: ', btn);
// btn1.addEventListener('click', function () {
//   alert('버튼1 클릭~!!');
// });

console.log('--------------------------');

// ◎ script 로드 해결방법
// 1. body 최하단에서 script 로드
// HTML 파싱을 한 후에 script 태그를 로드할 수 있도록 body 태그 최하단으로 script 태그 위치를 이동

// 2. load 이벤트 리스너 등록
// 2-(1) window.onload - HTML파싱 DOM생성 그리고 외부 콘텐츠(images, script, css, etc)가 로드된 후 발생하는 이벤트
window.onload = function () {
  // alert('window.onload');
  let btn2 = document.querySelector('#btn2');
  btn2.addEventListener('click', function () {
    alert('버튼2 클릭~!!');
  });
};

// 2-(2) DOMContentLoaded - HTML 파싱 DOM 생성 후 발생하는 이벤트
document.addEventListener('DOMContentLoaded', function () {
  // alert('DOMContentLoaded'); // window.onload 보다 먼저 실행됨
  let btn1 = document.querySelector('#btn1');
  btn1.addEventListener('click', function () {
    alert('버튼1 클릭~!!');
  });
});

console.log('--------------------------');

// ◎ HTML5 script 로드 해결방법
// HTML5에서는 defer, async 속성을 통해 비동기 script 로드가 가능해져 문제가 근본적으로 해결됨.

// 1. defer 속성 - HTML 파싱과 함께, 비동기로 JavaScript 파일을 불러온다.
// HTML 파싱이 완료된 후, JavaScript 코드를 실행한다.
// <script src="script.js" defer></script>

// 2. async 속성 - HTML 파싱과 함께, 비동기로 JavaScript 파일을 불러온다.
// HTML 파싱이 완료되지 않았더라도, 먼저 로딩되는 JavaScript 파일부터 실행이 시작된다.
// JavaScript 파일을 실행할 때는 HTML 파싱이 중단된다.
// <script src="script.js" async></script>
