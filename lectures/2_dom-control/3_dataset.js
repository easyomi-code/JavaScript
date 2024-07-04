let h2 = document.querySelector('h2');
h2.dataset.test = 'Hello Eunyomi~!';
console.log('h2.dataset.test: ', h2.dataset.test);

let img = document.querySelector('img');
let liList = document.querySelectorAll('li');
//console.log('liList: ', liList);
let selectedItem = document.querySelector('.selected-item');

liList[0].addEventListener('click', function (event) {
  //alert('Good~~!');
  //console.log(event.target.dataset.img);
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});

liList[1].addEventListener('click', selectItem);

liList[2].addEventListener('click', selectItem);

function selectItem(event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
}
