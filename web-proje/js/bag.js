'use stirct';

const bars = document.getElementById('menuBtn');
const pageBars = document.getElementById('secondBtn');
const none = document.getElementsByClassName('box.none');
const trash = document.getElementsByClassName('fa-trash');
const box = document.getElementsByClassName('box');
const openFolder = document.getElementsByClassName('open-folder');

// Bars açıp kapama
bars.addEventListener('click', function () {
  pageBars.classList.toggle('none');
});

// Esc tuşu evrensel ataması
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    pageBars.classList.add('none');
  }
});

// Çöp kutusu ataması
// trash.addEventListener('click', function () {
//   box;
// });
