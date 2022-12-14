$(".header__burger").click(function(){
   $(".header__burger").toggleClass('active');
   $(".menu__list").toggleClass('active');
});

// header 2

var header__lang = document.querySelector('.header__lang');
var span = document.querySelector('.span1');

header__lang.addEventListener('click', function(){
   span.classList.toggle('down');
});


// page1

var page1__bg = document.querySelector('.page1__bg');
var arr01 = document.querySelector('.arr01');
var arr02 = document.querySelector('.arr02');
var arr03 = document.querySelector('.arr03');
var orange = document.querySelector('.orange');

function bg1() {
   page1__bg.classList.add('bg01');
   page1__bg.classList.remove('bg2');
   page1__bg.classList.remove('bg3');
   arr01.classList.add('orange');
   arr02.classList.remove('orange');
   arr03.classList.remove('orange');
}
function bg2() {
   page1__bg.classList.add('bg2');
   page1__bg.classList.remove('bg3');
   page1__bg.classList.remove('bg01');
   arr02.classList.add('orange');
   arr01.classList.remove('orange');
   arr03.classList.remove('orange');
}
function bg3() {
   page1__bg.classList.add('bg3');
   page1__bg.classList.remove('bg2');
   page1__bg.classList.remove('bg01');
   arr03.classList.add('orange');
   arr02.classList.remove('orange');
   arr01.classList.remove('orange');
}

// page2

const contain = [...document.querySelectorAll('.page2__items')];
const contain2 = [...document.querySelectorAll('.page5__items')];

const nxtBtn = [...document.querySelectorAll('.arr21')];
const preBtn = [...document.querySelectorAll('.arr22')];
const nxtBtn2 = [...document.querySelectorAll('.arr210')];
const preBtn2 = [...document.querySelectorAll('.arr220')];

const firstImg = document.querySelector('.page2__item')[0];


contain.forEach((item, i) => {
   let containDir = item.getBoundingClientRect();
   let containerWid = containDir.width;

   nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWid / 4;
   });

   preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWid / 4;
   });
})

contain2.forEach((item, i) => {
   let containDir = item.getBoundingClientRect();
   let containerWid = containDir.width;

   nxtBtn2[i].addEventListener('click', () => {
      item.scrollLeft += containerWid;
   });

   preBtn2[i].addEventListener('click', () => {
      item.scrollLeft -= containerWid;
   });
})

// ================================== footer

var form10 = document.querySelector('.form10');
var page110 = document.querySelector('.page110');
var footer__btn = document.querySelector('.footer__btn');
var krest = document.querySelector('.krest');
var body = document.querySelector('body');

footer__btn.addEventListener('click', function(){
   form10.classList.add('ret1');
   page110.classList.add('ret2');
   body.classList.add('ret3');
});

krest.addEventListener('click', function(){
   form10.classList.remove('ret1');
   page110.classList.remove('ret2');
   body.classList.remove('ret3');
});

// ============================



