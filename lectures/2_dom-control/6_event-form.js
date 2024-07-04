let inputBox = document.querySelector('#input-box');
let img = document.querySelector('img');

// < 키보드 이벤트 >
// 1. keypress
// inputBox.addEventListener('keypress', function (event) {
//   console.log('keypress');
// });

// 2.keydown
// inputBox.addEventListener('keydown', function (event) {
//   console.log('keydown');
// });

// 3. keyup
// inputBox.addEventListener('keyup', function (event) {
//   console.log('keyup');
// });

// < 키보드 유용한 이벤트 속성 & 메서드 >
// event.key - 사용자가 누른 키 값 반환
// event.keyCode - 사용자가 누른 키 코드(ASCII) 반환
// inputBox.addEventListener('keyup', function (event) {
//   console.log('event.key: ', event.key);
//   console.log('event.keyCode: ', event.keyCode);
// });

// < 포커스 이벤트 >
// focus, blur, change
// inputBox.addEventListener('focus', function (event) {
//   alert('focus');
// });

// inputBox.addEventListener('blur', function (event) {
//   alert('blur');
// });

// inputBox.addEventListener('change', function (event) {
//   console.log('change');
// });

// 진행(progres) 이벤트
// error
img.addEventListener('error', function (event) {
  console.log('error');
  event.target.src = '../../img/error.jpg';
  event.target.width = 400;
});
