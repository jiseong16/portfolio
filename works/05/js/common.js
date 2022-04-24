$(function(){
   
    $('header').mouseover(function(){

        $(this).addClass('on')
    })

    $('header').mouseleave(function(){

        $(this).removeClass('on')

    })



    $('.search_wrap .search_icon').click(function(e){
        e.preventDefault();
        $('.search_wrap .search_area').stop().slideToggle();
        $('header').addClass('fix')
    });



    $('header .util_wrap .wish_icon').click(function(e){
        e.preventDefault();
        $('.wish_wrap .login_link').addClass('on');
        $('body').addClass('hidden');
        $('header .dimm').addClass('on')    
    });

    $('header .dimm').on('scroll touchmove mousewheel', function(e){

        e.preventDefault();
        
        e.stopPropagation(); 
        
        return false;
        
    });
        
        
        

    $('header .login_link .no').click(function(e){
        e.preventDefault();
        $('.wish_wrap .login_link').removeClass('on')
        $('body').removeClass('hidden');
        $('header .dimm').removeClass('on')
    });
    
    
    var banner_slide = new Swiper(".banner_slide", {

        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".banner_slide .next",
          prevEl: ".banner_slide .prev",
        },
        pagination: {
            el: ".banner_slide .swiper-pagination",
        },
      });


      $('.banner_slide .btn').mousemove(function (e) {
        var mouseX = e.offsetX;
        var mouseY = e.offsetY;
        $('.banner_slide .btn .cursor').css({
            left: mouseX + "px",
            top: mouseY + "px",
        })

    });

    $('.banner_slide .btn').mouseover(function () {
        $('.banner_slide .cursor').removeClass('on')
        $(this).find('.cursor').addClass('on')
    });
    $('.banner_slide .btn').mouseleave(function () {
        $('.banner_slide .cursor').removeClass('on')
    });





    $("body").on('mousewheel', function (e) {
        var wheel = e.originalEvent.wheelDelta;

        $('.search_wrap .search_area').slideUp() 
       //스크롤값을 가져온다.
        if (wheel > 0) {
            //스크롤 올릴때
            $('header').removeClass('up')

        } else {
            //스크롤 내릴때
            $('header').addClass('up') 
            $('.sub_area').removeClass('on')
            
        }
    });



    $(window).scroll(function(){

        curr = $(window).scrollTop();

        if(curr > 50){
            $('header').addClass('fix')
        }else{
            $('header').removeClass('fix')
        }


        if ( curr >= $('footer').offset().top - $(window).height()) {
            $('footer .consulting').addClass('hidden')
        } else {
            $('footer .consulting').removeClass('hidden')
        }

    });


})