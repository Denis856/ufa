var select = document.querySelector('.title01');
var button = document.querySelectorAll('.item5__box_link');
var away = document.querySelectorAll('.away');

var count = 0;


function only_one(){
   document.querySelector('.header').classList.add('active');
   away.forEach(item => {
      item.classList.add('active');
   })
}


button.forEach(but => {
   but.addEventListener('click', (e)=> {
      
      only_one();

      var parent = e.target.parentNode;
      select.classList.add('flex_1');
      var block_img = document.createElement('div');
      block_img.classList.add('title0__block_img');
      var img = document.createElement('img');
      img.setAttribute('src',parent.querySelector('.item5__img').currentSrc);
      img.classList.add('title0_img_main');
      var block_box_all = document.createElement('div');
      block_box_all.classList.add('title0__block_box');
      var block_box1 = document.createElement('div');
      block_box1.classList.add('title0__box');
      var block_box2 = document.createElement('div');
      block_box2.classList.add('title0__box');
      var block_box3 = document.createElement('div');
      block_box3.classList.add('title0__box');
      var block_box4 = document.createElement('div');
      block_box4.classList.add('title0__box');
      var block_box5 = document.createElement('div');
      block_box5.classList.add('title0__box');
      var img21 = document.createElement('img');
      img21.setAttribute('src',parent.querySelector('.item5__img').currentSrc);
      var img22 = document.createElement('img');
      img22.setAttribute('src',parent.querySelector('.item5__img').currentSrc);
      var img23 = document.createElement('img');
      img23.setAttribute('src',parent.querySelector('.item5__img').currentSrc);
      var img24 = document.createElement('img');
      img24.setAttribute('src',parent.querySelector('.item5__img').currentSrc);
      var img25 = document.createElement('img');
      img25.setAttribute('src',parent.querySelector('.item5__img').currentSrc);
      var block_text = document.createElement('div');
      block_text.classList.add('title0__block_text');
      var block_text_up = document.createElement('div');
      block_text_up.classList.add('title0__block_text_up');
      var price = document.createElement('p');
      price.classList.add('price0');
      price.innerText = parent.querySelector('.item5__price').textContent;
      var block_stars = document.createElement('div');
      var star1 = document.createElement('img');
      star1.setAttribute('src',parent.querySelector('.item2__star').currentSrc);
      var star2 = document.createElement('img');
      star2.setAttribute('src',parent.querySelector('.item2__star').currentSrc);
      var star3 = document.createElement('img');
      star3.setAttribute('src',parent.querySelector('.item2__star').currentSrc);
      var star4 = document.createElement('img');
      star4.setAttribute('src',parent.querySelector('.item2__star').currentSrc);
      var star5 = document.createElement('img');
      star5.setAttribute('src',parent.querySelector('.item2__star').currentSrc);
      var block_text_color = document.createElement('div');  // adding block_color
      block_text_color.classList.add('block_text_color');
      var block__text_1 = document.createElement('p');
      block__text_1.classList.add('block__text_1');
      block__text_1.innerText = 'color';
      var block_color_all = document.createElement('div');
      block_color_all.classList.add('block_color_all');
      var block_colors = document.createElement('div');
      block_colors.classList.add('block_colors');
      var block_color1 = document.createElement('button');
      var block_color2 = document.createElement('button');
      var block_color3 = document.createElement('button');
      block_color1 = parent.querySelector('.item5__color1').cloneNode();
      block_color2 = parent.querySelector('.item5__color2').cloneNode();
      block_color3 = parent.querySelector('.item5__color3').cloneNode();
      var block__color_text = document.createElement('p');
      block__color_text.classList.add('block__color_text');
      block__color_text.innerText = 'pink';
      block_colors.appendChild(block_color1);
      block_colors.appendChild(block_color2);
      block_colors.appendChild(block_color3);
      block_text_color.appendChild(block__text_1);
      block_color_all.appendChild(block_colors);
      block_color_all.appendChild(block__color_text);
      block_text_color.appendChild(block_color_all); //-----------------------
      var block_text_size = document.createElement('div');  // adding block_size_all ---------------------
      block_text_size.classList.add('block_text_color');
      var block__text_2 = document.createElement('p');
      block__text_2.classList.add('block__text_1');
      block__text_2.innerText = 'size';
      var block_size_all = document.createElement('div');
      block_size_all.classList.add('block_color_all');
      var select0 = document.createElement('select');
      var option1 = document.createElement('option');
      var option2 = document.createElement('option');
      var option3 = document.createElement('option');
      var option4 = document.createElement('option');
      var option5 = document.createElement('option');
      option1.innerText = '37';
      option2.innerText = '38';
      option3.innerText = '39';
      option4.innerText = '40';
      option5.innerText = '41';
      select0.appendChild(option1);
      select0.appendChild(option2);
      select0.appendChild(option3);
      select0.appendChild(option4);
      select0.appendChild(option5);
      select0.classList.add('select0');
      var block__text_3 = document.createElement('p');
      block__text_3.classList.add('block__text_3');
      block__text_3.innerText = 'Size chart';
      block_size_all.appendChild(select0);
      block_size_all.appendChild(block__text_3);
      block_text_size.appendChild(block__text_2);
      block_text_size.appendChild(block_size_all);
      var form1 = document.createElement('form1'); // adding form
      form1.classList.add('form1');
      var input1 = document.createElement('input');
      input1 = document.querySelector('.input06').cloneNode();
      input1.setAttribute('id','input1');
      var btn1 = document.createElement('button');
      var basket = document.createElement('i');
      basket.classList.add('icon-basket');
      basket.classList.add('basket01');
      btn1.classList.add('btn1');
      btn1.innerText = 'Add to cart';
      btn1.appendChild(basket);
      var btn2 = document.createElement('button');
      btn2.classList.add('btn2');
      btn2.innerText = 'Favorite';
      var favorit = document.createElement('i');
      favorit.classList.add('icon-favorit');
      favorit.classList.add('basket01');
      btn2.appendChild(favorit);
      form1.appendChild(input1);
      form1.appendChild(btn1);
      form1.appendChild(btn2);//----------------------------
      var text_show_all = document.createElement('div'); // adding text_show
      text_show_all.classList.add('text_show_all');
      var text_shows = document.createElement('div');
      text_shows.classList.add('text_shows');
      var text_1 = document.createElement('p');
      text_1.innerText ='Delivery';
      var burger1 = document.createElement('div');
      burger1.classList.add('burger1');
      var show_text = document.createElement('div');
      show_text.classList.add('show_text');
      var show_text1 = document.createElement('p');
      show_text1.textContent = 'Some info';
      var show_text2 = document.createElement('p');
      show_text2.textContent = 'Some info';
      var show_text3 = document.createElement('p');
      show_text3.textContent = 'Some info';
      show_text.appendChild(show_text1);
      show_text.appendChild(show_text2);
      show_text.appendChild(show_text3);
      text_shows.appendChild(text_1);
      text_shows.appendChild(burger1);
      text_show_all.appendChild(text_shows);
      text_show_all.appendChild(show_text);
      var text_show_all2 = document.createElement('div'); // adding text_show
      text_show_all2.classList.add('text_show_all');
      var text_shows2 = document.createElement('div');
      text_shows2.classList.add('text_shows');
      var text_2 = document.createElement('p');
      text_2.innerText ='Return';
      var burger2 = document.createElement('div');
      burger2.classList.add('burger1');
      var show_text002 = document.createElement('div');
      show_text002.classList.add('show_text');
      var show_text0 = document.createElement('p');
      show_text0.textContent = 'Some info';
      var show_text02 = document.createElement('p');
      show_text02.textContent = 'Some info';
      var show_text03 = document.createElement('p');
      show_text03.textContent = 'Some info';
      show_text002.appendChild(show_text0);
      show_text002.appendChild(show_text02);
      show_text002.appendChild(show_text03);
      text_shows2.appendChild(text_2);
      text_shows2.appendChild(burger2);
      text_show_all2.appendChild(text_shows2);
      text_show_all2.appendChild(show_text002);
      var block_soc = document.createElement('div'); // adding social
      block_soc.classList.add('block_soc');
      var block_soc_text = document.createElement('p');
      block_soc_text.classList.add('block_soc_text');
      block_soc_text.textContent = 'Share:';
      var social = document.createElement('div');
      social.classList.add('social');
      var soc_icon1 = document.createElement('i');
      var soc_icon2 = document.createElement('i');
      var soc_icon3 = document.createElement('i');
      soc_icon1.classList.add('icon-Facebook');
      soc_icon2.classList.add('icon-Twitter');
      soc_icon3.classList.add('icon-pinterest');
      social.appendChild(soc_icon1);
      social.appendChild(soc_icon2);
      social.appendChild(soc_icon3);
      block_soc.appendChild(block_soc_text);
      block_soc.appendChild(social);
      var pays = document.createElement('div'); // adding pay
      pays.classList.add('pays');
      var pay1 = document.createElement('img');
      pay1.setAttribute('src',document.querySelector('.img_pay1').currentSrc);
      pay1.setAttribute('id','pay1');
      var pay2 = document.createElement('img');
      pay2.setAttribute('src',document.querySelector('.img_pay2').currentSrc);
      pay2.setAttribute('id','pay2');
      var pay3 = document.createElement('img');
      pay3.setAttribute('src',document.querySelector('.img_pay3').currentSrc);
      pay3.setAttribute('id','pay3');
      pays.appendChild(pay1);
      pays.appendChild(pay2);
      pays.appendChild(pay3);
      var back = document.createElement('button');
      back.textContent = 'back';
      back.classList.add('back');
      block_stars.appendChild(star1); //-------------------------------------------------------
      block_stars.appendChild(star2);
      block_stars.appendChild(star3);
      block_stars.appendChild(star4);
      block_stars.appendChild(star5);
      block_text_up.appendChild(price);
      block_text_up.appendChild(block_stars);
      block_text.appendChild(block_text_up); //adding in block_text
      block_text.appendChild(block_text_color);
      block_text.appendChild(block_text_size);
      block_text.appendChild(form1);
      block_text.appendChild(text_show_all);
      block_text.appendChild(text_show_all2);
      block_text.appendChild(block_soc);
      block_text.appendChild(pays);
      block_img.appendChild(img); //---------------------------
      block_box1.appendChild(img21);
      block_box2.appendChild(img22);
      block_box3.appendChild(img23);
      block_box4.appendChild(img24);
      block_box5.appendChild(img25);
      block_box_all.appendChild(block_box1);
      block_box_all.appendChild(block_box2);
      block_box_all.appendChild(block_box3);
      block_box_all.appendChild(block_box4);
      block_box_all.appendChild(block_box5);
      block_img.appendChild(block_box_all);
      var flex_1 = document.createElement('div');
      flex_1.classList.add('flex_10');
      flex_1.appendChild(block_img);
      flex_1.appendChild(block_text);
      flex_1.appendChild(back);
      select.appendChild(flex_1);
      
      flex_1.classList.add('flex_10');
      text_shows.addEventListener('click', ()=>{
         burger1.classList.toggle('active');
         show_text.classList.toggle('active');
      })
      text_shows2.addEventListener('click', ()=>{
         burger2.classList.toggle('active');
         show_text002.classList.toggle('active');
      })
      back.addEventListener('click', ()=> {
         document.querySelector('.header').classList.remove('active');
         flex_1.removeChild(block_img);
         flex_1.removeChild(block_text);
         flex_1.removeChild(back);
         select.removeChild(flex_1);
   
         away.forEach(item => {
            item.classList.remove('active');
         })
      });

      
      var number2 = document.querySelectorAll('.item5__color');
      number2.forEach(item =>{ 
         item.addEventListener('click', (e) =>{
            number2.forEach(el=>{ el.classList.remove('active2'); });
         item.classList.add('active2');
      });
      });

      
      btn1.addEventListener('click', (e)=> {
         var basket_all = document.getElementById('title0');
         count ++;
         gut.innerHTML = count;
         var basket_block = document.createElement('div');
         basket_block.classList.add('basket_block');
         var img1 = document.createElement('img');
         img1.setAttribute('src',document.querySelector('.title0_img_main').currentSrc);
         img1.classList.add('img1');
         var block_info = document.createElement('div');// adding info
         block_info.classList.add('block_info');
         var blobk_title = document.createElement('p');
         blobk_title.innerText = parent.querySelector('.item5__title').innerText;
         blobk_title.classList.add('blobk_title');
         var info_inner = document.createElement('div');
         info_inner.classList.add('info_inner');
         var info_text1 = document.createElement('p');
         info_text1.textContent = 'Color :';
         var info_text2 = document.createElement('button');
         info_text2.classList.add('info_text2');
         if(block_color1.classList.contains('active2')) {
            info_text2 = block_color1.cloneNode();
         }
         if(block_color2.classList.contains('active2')) {
            info_text2 = block_color2.cloneNode();
         }
         if(block_color3.classList.contains('active2')) {
            info_text2 = block_color3.cloneNode();
         }
         var info_inner2 = document.createElement('div');
         info_inner2.classList.add('info_inner');
         var info_text01 = document.createElement('div');
         info_text01.textContent = 'Size :';
         var info_text02 = document.createElement('div');
         info_text02.classList.add('info_text02');
         info_text02.innerText = select0.value;//---------------
         var input010 = document.createElement('input');
         input010 = input1.cloneNode();
         input010.classList.add('input010');//----------------
         var price01 = document.createElement('p');
         price01.classList.add('price01');
         price01.innerText = price.innerText;//---------------
         var btn010 = document.createElement('button');
         btn010.classList.add('btn010');
         btn010.innerText = 'Delete';
         btn010.addEventListener('click', ()=>{
            basket_all.removeChild(basket_block);
            count --;
            gut.innerHTML = count;
         });
         basket_all.style.display = 'block';
         info_inner.appendChild(info_text1);
         info_inner.appendChild(info_text2);
         info_inner2.appendChild(info_text01);
         info_inner2.appendChild(info_text02);
         block_info.appendChild(blobk_title);
         block_info.appendChild(info_inner);
         block_info.appendChild(info_inner2);
         basket_block.appendChild(img1);//--------------------------------
         basket_block.appendChild(block_info);
         basket_block.appendChild(input010);
         basket_block.appendChild(price01);
         basket_block.appendChild(btn010);
         basket_block.classList.add('basket_block')
         basket_all.appendChild(basket_block);
         basket_all.classList.add('basket_all');
         var back2 = document.createElement('button');
         back2.classList.add('back2');
         back2.innerText = 'back';
         img1.style.display = 'none';
         block_info.style.display = 'none';
         input010.style.display = 'none';
         price01.style.display = 'none';
         btn010.style.display = 'none';
         back2.style.display = 'none';
         var bask = document.querySelector('.header2__basket_text');
         basket_all.appendChild(back2);
         bask.addEventListener('click', ()=> {
            img1.style.display = 'block';
            block_info.style.display = 'block';
            input010.style.display = 'block';
            price01.style.display = 'block';
            btn010.style.display = 'block';
            back2.style.display = 'block';
            flex_1.removeChild(block_img);
            flex_1.removeChild(block_text);
            flex_1.removeChild(back);
            flex_1.classList.remove('flex_10');
            basket_all.style.display = 'block';
         })
         back2.addEventListener('click', ()=> {
            document.querySelector('.header').classList.remove('active');
            basket_all.style.display = 'none';
            away.forEach(item => {
               item.classList.remove('active');
            })
         })
      });

   });
})
