
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

 function hide_gif(){
   $('#page03-1').fadeOut("fast");
 }

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if((wd >= 1400)&&(wd <=1415)){
     $('#page03-1').show(100);
     window.setTimeout(hide_gif, 1700);
   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 1300){
     $('#page03-1').hide(150);
   }
 })

 /* Page 06 */

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 3900){
     $('#page06-3').show();

   }
 })


 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 4400){
     $('#graph1').hide();
     $('#graph2').hide();
     $('#graph5').hide();
     $('#graph3').hide();

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 4400){
     $('#graph1').show();
     $('#graph2').show();
     $('#graph5').show();
     $('#graph3').show();

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 4900){
      $('#page06-4').show();
     $('#graph4').css('background-image','url("css/images/GRAPH 06.jpg")');

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 4900){
      $('#page06-4').hide();
     $('#graph4').css('background-image','url("css/images/GRAPH 04.jpg")');

   }
 })

 /* Page 08 */

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 7400){
     $('#page08-1').show();

   }
 })

 /* Page 09 */

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 8350){
     $('#page09').show();

   }
 })

 /* Page 10,11*/


 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 9400){
     $('#page11').show();
     $('#page11').animate({marginTop: '1850px'});
   }
 })



 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 9650){
     $('#show2').fadeIn(500);

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 9650){
     $('#show2').fadeOut(500);

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 9900){
     $('#show3').fadeIn(500);

   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 9900){
     $('#show3').fadeOut(500);

   }
 })
/*
 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd >= 10000){
     $('#show2').css({ position : 'absolute', marginTop: '900px'});
     $('#show3').css({ position : 'absolute', marginTop: '900px'});
   }
 })

 $(window).scroll(function(){
   var wd = $(this).scrollTop();
   if(wd <= 10000){
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
