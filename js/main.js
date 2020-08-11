
/* Copyright 2020. Soyoung LEE all rights reserved.
     Email : daianaludice@naver.com */


/* intro */
$('#nav').fadeOut();

function hide_gif(){
  $('#open_gif').fadeOut("fast");
}

window.setTimeout(hide_gif, 1300);

$('#button1').click(function(){
        $('#nav').fadeIn();
});

$('#button2').click(function(){
        $('#nav').fadeOut();
});

 /* Page 02*/
$('#page02-1').hide();

 /* Page 03 */
$('#page03-1').hide();

 /* Page 05 */
 $('#icon1').mouseenter(function(){
      $(this).animate({width: '524px' , marginLeft: '30px' , marginTop: '110px'});
 });

 $('#icon1').mouseleave(function(){
      $(this).animate({width: '44px' , marginLeft: '269px' , marginTop: '351px'} ,500);
 });

 $('#icon2').mouseenter(function(){
      $(this).animate({width: '524px' , marginLeft: '314px' , marginTop: '110px'} );
 });

 $('#icon2').mouseleave(function(){
      $(this).animate({width: '44px' , marginLeft: '554px' , marginTop: '351px'}, 500);
 });

 $('#icon3').mouseenter(function(){
      $(this).animate({width: '524px' , marginLeft: '785px' , marginTop: '110px'});
 });
 $('#icon3').mouseleave(function(){
      $(this).animate({width: '44px' , marginLeft: '1023px' , marginTop: '351px'}, 500);
 });

 $('#icon4').mouseenter(function(){
      $(this).animate({width: '834px' , marginLeft: '1190px' , marginTop: '110px' });
 });

 $('#icon4').mouseleave(function(){
      $(this).animate({width: '70px' , marginLeft: '1582px' , marginTop: '351px'}, 500);
 });

  /* Page 12*/
  $('#page12').hide();
  $('#test2').fadeOut();
  $('#test3').fadeOut();
