let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

// Test
// console.log(btn1);
// console.log(btn2);

btn1.onclick = function () {
  alert('프로퍼티 리스너 Good~!');
};

btn2.addEventListener('click', event1);
function event1() {
  alert('첫 번째 addEventListener~!');
}

btn2.addEventListener('click', function () {
  alert('두 번째 addEventListener~!');
});

// 이벤트 제거(사전에 함수 정의 필요)
btn2.removeEventListener('click', event1);
