// < HTML 요소 선택 >
// 1) get 메서드

// document.getElementById(고유한 ID)
let title = document.getElementById('title');
console.log(title);
title.textContent = '헬스 3대 운동';

// document.getElementsByClassName(클래스 명)
let items = document.getElementsByClassName('item');
console.log(items);
console.log('스쿼트: ', items[0]);
console.log('벤치프레스: ', items[1]);
console.log('데드리프트: ', items[2]);

// document.getElementsByTagName(태그명)
let liList = document.getElementsByTagName('li');
console.log(liList);

// 2) DOM 요소 쿼리(HTML 요소 쿼리)
// document.querySelector(CSS Selector)
let h2 = document.querySelector('#title');
console.log('h2: ', h2);

let item = document.querySelector('.item');
console.log('query item: ', item);

let itemAll = document.querySelectorAll('.item');
console.log('itemAll: ', itemAll);
console.log('itemAll[0]: ', itemAll[0]);
console.log('itemAll[1]: ', itemAll[1]);
console.log('itemAll[2]: ', itemAll[2]);

// < HTML 요소 조작 >
// 1) 콘텐츠 수정

//h2.textContent = '<span>운동!!!</span>';

// h2.innerHTML = '<span>운동@@@</span>';
//document.querySelector('body').innerHTML = '<strong>운동</strong>';

// 1) 속성 제어
let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요');
input.setAttribute('required', '');
input.removeAttribute('placeholder');
input.removeAttribute('required');

// < HTML 요소 스타일링 >
// 1) 요소 프로퍼티 직접 수정
let helloItem = document.querySelector('.hello');
console.log('hello item: ', helloItem);
// helloItem.style.color = 'white';
// helloItem.style.backgroundColor = 'blue';

// 2) CSS 클래스 이용
helloItem.classList.add('dark');
helloItem.classList.remove('dark');
helloItem.classList.add('light');
