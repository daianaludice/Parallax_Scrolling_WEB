
/* Copyright 2020. Soyoung LEE all rights reserved.
     Email : daianaludice@naver.com */


/* intro */
$('#nav').fadeOut();

function hide_gif(){
  $('#open_gif').fadeOut("fast");
}

window.setTimeout(hide_gif, 1300);


$('#button3').click(function(){
        $('#nav').fadeIn();
        $('#button3').hide();
});

$('#button2').click(function(){
        $('#nav').fadeOut();
        $('#button3').show();
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
  setInterval(function(){
    setTimeout(function() {
    $('#show3').css('background-image','url("css/images/PAGE 11-3.png")');
  }, 700);
  setTimeout(function() {
  $('#show3').css('background-image','url("css/images/PAGE 11-3-2(BRAVE).png")');
}, 1400);},1401);

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

function rotate360(){
  $("#send").css({
       //for firefox
       "-moz-animation-name":"rotateimg360",
       "-moz-animation-duration":"2s",
       "-moz-animation-iteration-count":"1",
           "-moz-animation-fill-mode":"forwards",
       //for safari & chrome
       "-webkit-animation-name": "rotateimg360",
       "-webkit-animation-duration":"2s",
       "-webkit-animation-iteration-count":"1",
       "-webkit-animation-fill-mode" : "forwards"
   }).animate({ marginLeft : '1950px'},2000);
}
function rotateBack(){
  $("#send").css({
       //for firefox
       "-moz-animation-name":"rotateimgBack",
       "-moz-animation-duration":"2s",
       "-moz-animation-iteration-count":"1",
           "-moz-animation-fill-mode":"forwards",
       //for safari & chrome
       "-webkit-animation-name": "rotateimgBack",
       "-webkit-animation-duration":"2s",
       "-webkit-animation-iteration-count":"1",
       "-webkit-animation-fill-mode" : "forwards"
   }).animate({ marginLeft : '1627px'},2000);
}

function sizeBack(){
  $("#send").animate({width: '112px', marginLeft: '1636px' , marginTop: '818px'}, 300);
}

  /* Page 14*/
  $('#page14-2').fadeOut();
  $("#send").click(function(){
    $('#page14-2').fadeIn();
    $(this).animate({width: '129px', marginLeft: '1627px' , marginTop: '809px'}, 300);
    setTimeout('rotate360()',600);
    setTimeout('rotateBack()',2900);
    setTimeout('sizeBack()',3100);


    //setTimeout(function(){ $(this).animate({marginLeft: '1710px' }, 500);},800);
    //$(this).animate({ transform : 'rotate(180deg)'}, 500);

    //$(this).animate({rotate:'180deg'},500);




    //$(this).css('transform','rotate( 180deg )');
    // $('#send').animate({  transform: 'rotate( 359deg )'}, 2000);

    /*const element = document.querySelector('.sends');
    element.classList.add('animated', 'bounce');
    setTimeout(function() {
    element.classList.remove('bounce');
  }, 2000);*/
  });

/*  $(document).ready(function(){
    var rotateflag = "";
    $('#send').click(function(){



        rotateflag = rotateflag == "rotateimg45" ? "rotateimgBack" : "rotateimg45";
        $(this).css({
            //for firefox
            "-moz-animation-name":rotateflag,
            "-moz-animation-duration":"0.5s",
            "-moz-animation-iteration-count":"1",
                "-moz-animation-fill-mode":"forwards",
            //for safari & chrome
            "-webkit-animation-name":rotateflag,
            "-webkit-animation-duration":"0.5s",
            "-webkit-animation-iteration-count":"1",
            "-webkit-animation-fill-mode" : "forwards"
       });
  });
});*/
/*  $("#send").click(
     function()
     {
            setTimeout($(this).css({
          transform: "rotate(180deg)"
        });,800);
     }
  );*/

  /* footer*/

  /*  function hide_page11(){
        $("#page11").hide();
      }*/
