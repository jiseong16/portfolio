$(function(){
    

  /**
   * 메인비주얼 3개의 연동
   *
   * @version 1.0.0
   * @since 2022-01-16
   * @author 본인이름 (Nico)
   */


    var main_slide = new Swiper(".main_slide", {
        loop:true,
        speed: 1000,
        parallax: true,
        navigation: {
          nextEl: ".main_slide .next_btn",
          prevEl: ".main_slide .prev_btn",
        },
        pagination: {
            el: ".fraction",
            type: "fraction",
        },
         
    });



    var txt_slide = new Swiper(".txt_slide", {
        effect:'fade',
        // loop:true,
        speed: 1000,
        parallax: true,
        // simulateTouch:false,
    });
    var sub_slide = new Swiper(".sub_slide", {
        // loop:true,
        speed: 1000,
        parallax: true,
        direction:'vertical',
        // simulateTouch:false,
    });



    // main_slide.on('slideNextTransitionStart',function(){
    //   txt_slide.slideNext();
    //   sub_slide.slideNext();
    //   alert('1')
    // })
    // main_slide.on('slidePrevTransitionStart',function(){
    //   txt_slide.slidePrev();
    //   sub_slide.slidePrev();
    // })


    function guage(){
        $('.guage span').css({width:0})
        $('.guage span').stop().animate({width:'100%'},5000,function(){

            main_slide.slideNext();
        })
    }
    guage();

    main_slide.on('slideChange',function(){
      // alert(this.realIndex);
      guage();
      txt_slide.slideTo(this.realIndex);
      sub_slide.slideTo(this.realIndex);
      // sub_slide.slideNext();
    })

    



    $('.gnb li').hover(function(){

        lVal = $(this).position().left + ($(this).width()/2) - 2;

        $('.gnb .dot').stop().animate({left:lVal}).addClass('on')
    },function(){
        $('.gnb .dot').removeClass('on')


    })


    gsap.fromTo('.inner_wrap .scroll_img img',{
        yPercent:-20
    },{
        scrollTrigger:{
            trigger:"main",
            start:"top top",
            end:"bottom top",
            // markers:true,
            scrub:1,

        },
        yPercent:40,
        rotation: 360
    })


    
    const product_img = gsap.timeline({
        defaults:{
            duration:0.8,
            delay:0.1,
        },
        scrollTrigger:{
            trigger:".sc_product",
            start:"top 20%",
            // markers:true,
        }

    })

    product_img.addLabel('label1')
    .from('.sc_product ul',{y:300},'label1')
    .from('.sc_product .product:nth-child(3n-1)',{y:300},'label1-=0.4')




    // $('header .search').bind('input', function() {
    //     $(this).addClass('on');
    // });




    

})