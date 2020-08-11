
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


 /* Page 10,12*/


 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 7630){
     $('#page12').show();
     $('#page12').animate({marginTop: '3875px'});
   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 8030){
     $('#test2').fadeIn(500);

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 8030){
     $('#test2').fadeOut(500);

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 8430){
     $('#test3').fadeIn(500);

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 8430){
     $('#test3').fadeOut(500);

   }
 })



/*$("#page12").on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    //스크롤값을 가져온다.
    if(wheel>-100){
      //스크롤 올릴때
      $('#page12').animate({marginTop: '0px'});
    }
});*/
