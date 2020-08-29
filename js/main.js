
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

 /* Page 6*/
$('#page06-3').hide();
 $('#page06-4').hide();

 $('#graph1').mouseenter(function(){
      $(this).css('background-image','url("css/images/GRAPH 01-2.jpg")');
 });
 $('#graph1').mouseleave(function(){
      $(this).css('background-image','url("css/images/GRAPH 01.jpg")');
 });

 $('#graph2').mouseenter(function(){
      $(this).css('background-image','url("css/images/GRAPH 02-2.jpg")');
 });
 $('#graph2').mouseleave(function(){
      $(this).css('background-image','url("css/images/GRAPH 02.jpg")');
 });

 $('#graph3').mouseenter(function(){
      $(this).css('background-image','url("css/images/GRAPH 03-2.jpg")');
      $("#graph4").hide();
 });
 $('#graph3').mouseleave(function(){
      $(this).css('background-image','url("css/images/GRAPH 03.jpg")');
      $('#graph4').show();
 });

 $('#graph4').mouseenter(function(){
      $(this).css('background-image','url("css/images/GRAPH 03-2.jpg")').css('marginTop','269px');
      $("#graph3").hide();
 });
 $('#graph4').mouseleave(function(){
      $(this).css('background-image','url("css/images/GRAPH 04.jpg")').css('marginTop','407px');
      $('#graph3').show();
 });


 $('#graph5').mouseenter(function(){
      $(this).css('background-image','url("css/images/GRAPH 05-2.jpg")');
 });
 $('#graph5').mouseleave(function(){
      $(this).css('background-image','url("css/images/GRAPH 05.jpg")');
 });


 /* Page 8*/
$('#page08-1').hide();
 $('#graph7').mouseenter(function(){
      $(this).css('background-image','url("css/images/GRAPH 07-2.jpg")');
 });
 $('#graph7').mouseleave(function(){
      $(this).css('background-image','url("css/images/GRAPH 07.jpg")');
 });


 /* Page 9*/
$('#page09').hide();
 $('#graph8').mouseenter(function(){
      $(this).css('background-image','url("css/images/GRAPH 08-2.jpg")');
 });
 $('#graph8').mouseleave(function(){
      $(this).css('background-image','url("css/images/GRAPH 08.jpg")');
 });

 $('#graph9').mouseenter(function(){
      $(this).css('background-image','url("css/images/GRAPH 09-2.jpg")');
 });
 $('#graph9').mouseleave(function(){
      $(this).css('background-image','url("css/images/GRAPH 09.jpg")');
 });


  /* Page 11*/
  $('#page11').hide();
  $('#show2').fadeOut();
  $('#show3').fadeOut();

  /* Page 12*/

  $('#graph10').mouseenter(function(){
       $(this).css('background-image','url("css/images/GRAPH 10-2.jpg")');
  });
  $('#graph10').mouseleave(function(){
       $(this).css('background-image','url("css/images/GRAPH 10.jpg")');
  });

  $('#graph11').mouseenter(function(){
       $(this).css('background-image','url("css/images/GRAPH 11-2.jpg")');
  });
  $('#graph11').mouseleave(function(){
       $(this).css('background-image','url("css/images/GRAPH 11.jpg")');
  });

  /* Page 13*/

  $('#graph12').mouseenter(function(){
       $(this).css('background-image','url("css/images/GRAPH 12-2.jpg")');
  });
  $('#graph12').mouseleave(function(){
       $(this).css('background-image','url("css/images/GRAPH 12.jpg")');
  });


  /* Page 14*/
  $('#page14-2').fadeOut();
  $('#send').click(function(){
          $('#page14-2').fadeIn();
  });
