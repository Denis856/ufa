var burger = document.querySelector('.header__burger');
var up_list = document.querySelector('.header__list');
var body = document.querySelector('body');
var block0 = document.querySelectorAll('.footer__block');
var title0 = document.querySelectorAll('.footer__title');

burger.addEventListener('click', ()=> {
   burger.classList.toggle('active');
   up_list.classList.toggle('active');
   body.classList.toggle('active');
   block0.forEach(item =>{
      item.classList.remove('active');
   });
   title0.forEach(item =>{
      item.classList.toggle('active');
   });
});

// footer

var title01 = document.querySelectorAll('.footer__title');

title01.forEach(item => {
   item.addEventListener('click', (e)=> {
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});

// next


var btn1 = document.querySelector('.brands__btn');
var btn2 = document.querySelector('.btn2');
var item2 = document.querySelectorAll('.brands__item2');

btn1.onclick = () => {
   btn1.textContent = 'move back';
   btn1.classList.add('btn2');
   item2.forEach(item => {
      item.classList.toggle('active');
      if(!item.classList.contains('active')){
         btn1.textContent = 'See All';
      }
   });
};

// next

var btn3 = document.querySelector('.press__btn');
var item3 = document.querySelectorAll('.press__item2');

btn3.onclick = () => {
   btn3.textContent = 'move back';
   btn3.classList.add('btn2');
   item3.forEach(item => {
      item.classList.toggle('active');
      if(!item.classList.contains('active')){
         btn3.textContent = 'See All';
      }
   });
};

// smooth move

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}