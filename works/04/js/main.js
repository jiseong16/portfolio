$(function(){


  const main_slide = new Swiper(".main_slide", {

    loop: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    pagination: {
      el: ".main_slide .swiper-pagination",
    },

  });


  var swiper = new Swiper(".cate_slide", {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true,
  });

  $(window).scroll(function(){
    
    h = $(this).scrollTop();

    if(h > 0){
      $('header .util_wrap').addClass('fixed');
    }else{
      $('header .util_wrap').removeClass('fixed');
    }

    // if($('header .util_wrap').hasClass('fixed')){
    //   $('header .gnb').show();

    // }else{
    //   $('header .gnb').hide();
    // }

  });



})