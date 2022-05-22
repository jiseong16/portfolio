$(function () {

    var swiper = new Swiper(".header_slide", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

    });

    $('.search_wrap .search').click(function (e) {
        e.preventDefault();
        $('.search_wrap .search_menu').addClass('on');
        $('body').addClass('hidden')
    });
    


    $('.search_wrap .close').click(function (e) {
        e.preventDefault();
        $('.search_wrap .search_menu').removeClass('on');
        $('body').removeClass('hidden')
    });


    $('.cate_wrap .cate').click(function (e) {
        e.preventDefault();
        $('.cate_wrap .cate_area,.dimm').addClass('on');
        $('body').addClass('hidden');

    });

    $('.cate_wrap .close ,header .dimm').click(function (e) {
        e.preventDefault();
        $('.cate_wrap .cate_area,.dimm').removeClass('on');
        $('body').removeClass('hidden')
    });




    $('.category,.info').click(function (e) {

        e.preventDefault();
        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
            $(this).siblings().stop().fadeOut();
            $(this).siblings().find('ul').stop().slideUp();
        }else {
            $(this).addClass('on');
            $(this).siblings().stop().fadeIn();
            $(this).siblings().find('ul').stop().slideDown();
        }

    });

    
    $('.all_open').click(function (e) {
        e.preventDefault();
        $('.all_menu').stop().slideToggle();
        $('.gnb_wrap').toggleClass('hide')

    })

    //마우스 올릴때 내릴때 이벤트 
    $("body").on('mousewheel', function (e) {
        var wheel = e.originalEvent.wheelDelta;
        curr = $(window).scrollTop();
        if (wheel > 0) {
            //스크롤 올릴때(양수일때)
            if(curr < 1){
                $('.fix_btn').removeClass('on');
            }else{
                $('.fix_btn').addClass('on');
            } 
        } else {
            //스크롤 내릴때(음수일때)
            $('.fix_btn').removeClass('on');
        }


    });


    $('#topBtn').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        })

    })



})