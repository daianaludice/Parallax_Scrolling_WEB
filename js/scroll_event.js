
/* Copyright 2020. Soyoung LEE all rights reserved.
     Email : daianaludice@naver.com */

 /* Page 02*/
$(window).scroll(function(){
  var wd = $(this).scrollTop();
  if(wd >= 700){
    $('#page02-1').show(100);
  }
})

$(window).scroll(function(){
  var wd = $(this).scrollTop();
  if(wd <= 600){
    $('#page02-1').hide(150);
  }
})

 /* Page 03 */
 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 1400){
     $('#page03-1').show(100);
   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 1300){
     $('#page03-1').hide(150);
   }
 })
