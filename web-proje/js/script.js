'use strict';
const body = document.getElementsByTagName('body');
const bars = document.getElementById('menuBtn');
const display = document.getElementsByClassName('none');
const page = document.getElementById('secondBtn');
const rotateopen = document.getElementsByClassName('rotateopen');

//  Menü Kısmı açıp kapatma
bars.addEventListener('click', function () {
  page.classList.toggle('none');
  bars.classList.toggle('rotateopen');
});

// Esc tuşu evrensel event ataması
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    page.classList.add('none');
  }
});
