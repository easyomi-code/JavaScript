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
  alert('window.onload');
  let btn2 = document.querySelector('#btn2');
  btn2.addEventListener('click', function () {
    alert('버튼2 클릭~!!');
  });
};

// 2-(2) DOMContentLoaded - HTML 파싱 DOM 생성 후 발생하는 이벤트
document.addEventListener('DOMContentLoaded', function () {
  alert('DOMContentLoaded'); // window.onload 보다 먼저 실행됨
  let btn1 = document.querySelector('#btn1');
  btn1.addEventListener('click', function () {
    alert('버튼1 클릭~!!');
  });
});
