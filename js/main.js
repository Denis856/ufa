$(document).ready(function() {
   $(window).scroll(function(event){
      var s=$(this).scrollTop();
      var w=$(this).outerWidth();
      var h=$('.content').outerHeight();
      var h_b=$('.paralax').outerHeight();
      var p=s/h*100;
      var p_b=s/h_b*100;
      var o=1-1/100*p_b;

      var z_1=1+(w/10000*p_b);
      $('.oar_fon').css('transform','scale('+z_1+')');
      $('.oar_fon').css('opacity',o);

      var z_5=1+(w/10000*p_b);
      $('.oar_mon21').css('transform','scale('+z_5+')');
      $('.oar_mon21').css('opacity',o);

      var z_6=1+(w/10000*p_b);
      $('.oar_mon22').css('transform','scale('+z_6+')');
      $('.oar_mon22').css('opacity',o);

      var z_7=1+(w/10000*p_b);
      $('.oar_mon23').css('transform','scale('+z_7+')');
      $('.oar_mon23').css('opacity',o);
      
      var z_2=1+(w/5000000*p);
      $('.oar_mon1').css('transform','scale('+z_2+')');
      
      var hr=w/2000*p_b;
      var z_3=1+(w*0.00005*p_b);
      $('.oar_mon2').css('transform', 'translate3d('+hr+'px,0,0) scale('+z_3+')');
      
      var hr_2=w/1500*p_b;
      var z_4=1+(w*0.00005*p_b);
      $('.oar_mon3').css('transform', 'translate3d('+hr_2+'px,0,0) scale('+z_4+')');
   });
});