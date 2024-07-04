let addBtn = document.getElementById('button');
let beforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
//let removeBtn = document.querySelector('#target-remove');
let removeTargetBtn = document.getElementById('target-remove');

let removeBtn = document.querySelector('.remove-btn');

// 추가 button
addBtn.addEventListener('click', function () {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = inputBox.value;

  // X 버튼 생성
  let button = document.createElement('button');
  button.textContent = 'X';
  // 클래스명 삽입
  //button.setAttribute('class', 'remove-btn');
  button.classList.add('remove-btn');
  // button.addEventListener('click', function (event) {
  //   console.log(event.target.parentNode);
  //   event.target.parentNode.remove();
  // });
  button.addEventListener('click', removeParentNode);
  li.appendChild(button);

  ul.appendChild(li);
  inputBox.value = '';
  inputBox.focus();
});

// 앞에 추가 button
beforeBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');
  //let targetLi = document.getElementById('target');
  console.log(targetLi);
  li.textContent = inputBox.value;
  //ul.appendChild(li);
  ul.insertBefore(li, targetLi);
});

// 타깃제거 button
removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

// X button 클릭 시
removeBtn.addEventListener('click', removeParentNode);

// 반복 함수 선언
function removeParentNode(event) {
  event.target.parentNode.remove();
  inputBox.focus();
  inputBox.value = '';
}
