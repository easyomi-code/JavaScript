let rectangle = document.querySelector('#rectangle');
let body = document.querySelector('body');

// 마우스 이벤트
// mousedown - 마우스가 요소안에서 클릭이 눌릴 때
rectangle.addEventListener('mousedown', function (event) {
  // console.log('mousedown');
  // console.log(event.target);
  // console.log(event.target.getBoundingClientRect());
  // console.log('clientX: ', event.clientX, 'clientY: ', event.clientY);
  // console.log('pageX: ', event.pageX, 'pageY: ', event.pageY);
});

// circle 이벤트
// body.addEventListener('click', function (event) {
//   console.log('pageX: ', event.pageX, 'pageY: ', event.pageY);
//   let div = document.createElement('div');
//   div.classList.add('circle');
//   div.style.left = event.pageX - 25 + 'px';
//   div.style.top = event.pageY - 25 + 'px';
//   body.appendChild(div);
// });

// mouseup - 마우스가 요소안에서 클릭이 해제될 때
// rectangle.addEventListener('mouseup', function (event) {
//   console.log('mouseup');
// });

// // mouseenter - 마우스 포인터가 요소 안으로 진입 했을 때
// rectangle.addEventListener('mouseenter', function (event) {
//   console.log('mouseenter');
// });

// // mouseleave - 마우스 포인터가 요소 바깥으로 나갔을 때
// rectangle.addEventListener('mouseleave', function (event) {
//   console.log('mouseleave');
// });

// // mousemove - 마우스 포인터가 요소 안에서 움직일 때
// rectangle.addEventListener('mousemove', function (event) {
//   console.log('mousemove');
// });
