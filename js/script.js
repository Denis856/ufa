var indexValue = 1;
showImg(indexValue);

function btn_slide(e) {showImg(indexValue = e);}
function side_slide(e) {showImg(indexValue += e);}
function showImg(e) {
   var i;
   var img = document.querySelectorAll('.home__slide');
   var sliders = document.querySelectorAll('.home__choice');
   if(e > img.length) {indexValue = 1;}
   if(e < 1) {indexValue = img.length;}
   for(i = 0; i < img.length; i++) {
      img[i].style.display = "none";
   }
   for(i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove('active');
   }
   img[indexValue - 1].style.display = "block";
   sliders[indexValue - 1].classList.add('active');
}

// next

'use strick'

const tabsBtn = document.querySelectorAll('.arrivals__btn');
const tabsContent = document.querySelectorAll('.arrivals__items');

tabsBtn.forEach(function(element) {
   element.addEventListener('click', open);
});

function open(evt){
   const tabTarget = evt.currentTarget;
   const button = tabTarget.dataset.button;

   tabsBtn.forEach(function(item){
      item.classList.remove('active');
   });
   tabsContent.forEach(function(item){
      item.classList.remove('active');
   });

   tabTarget.classList.add('active');
   document.querySelector(`#${button}`).classList.add('active');

}

// next


var productContainers = document.querySelectorAll('.page0__items');
var item20 = document.querySelectorAll('.page0__item')[0];
var preBtn = document.querySelectorAll('.page0__btn1');
var nextBtn = document.querySelectorAll('.page0__btn2');

productContainers.forEach((item, i) => {
   let containerWidth = item20.clientWidth + 30;

   preBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
   });
   nextBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
   });
   
});

// next

var number = document.querySelectorAll('.item5__size');
var number3 = document.querySelectorAll('.subscribe__count');

number.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
      number.forEach(el=>{ el.classList.remove('active'); });
   item.classList.add('active');
});
});


number3.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
      number3.forEach(el=>{ el.classList.remove('active'); });
   item.classList.add('active');
});
});