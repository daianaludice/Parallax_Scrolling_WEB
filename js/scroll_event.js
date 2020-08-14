
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


 /* Page 10,11*/


 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 7630){
     $('#page11').show();
     $('#page11').animate({marginTop: '3875px'});
   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 7930){
     $('#show2').fadeIn(500);

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 7930){
     $('#show2').fadeOut(500);

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 8230){
     $('#show3').fadeIn(500);

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 8230){
     $('#show3').fadeOut(500);

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 8630){
     $('#show2').css({ position : 'absolute', marginTop: '900px'});
     $('#show3').css({ position : 'absolute', marginTop: '900px'});
   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 8630){
     $('#show2').css({ position : 'fixed', marginTop: '0px'});
     $('#show3').css({ position : 'fixed', marginTop: '0px'});

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
