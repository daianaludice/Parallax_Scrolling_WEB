
/* Copyright 2020. Soyoung LEE all rights reserved.
     Email : daianaludice@naver.com */

$(window).scroll(function(){
  var wd = $(this).scrollTop();
  if(wd >= 830){
    $('#page02-1').show(50);
  }
})

$(window).scroll(function(){
  var wd = $(this).scrollTop();
  if(wd <= 700){
    $('#page02-1').hide(150);
  }
})
