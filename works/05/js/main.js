$(function () {

    AOS.init();
    


    $('header .gnb .dept1 a').mouseover(function () {

        target = $(this).attr('href'); 
        $('.sub_area').addClass('on')
        // $('.sub_area').stop().slideDown(); 
        // $(this).closest('ul').siblings('.sub_area').stop().slideDown(); 
        $(target).addClass('on').siblings('.sub').removeClass('on')
        $('.dept3').hide();  
        // if ($(this).parent().hasClass('dept1')) {
        //     if ($('.sub_area').hasClass('on')) { //첫 등장후 깜빡이면서
        //         $('.sub_area').hide()
        //         $(this).closest('ul').siblings('.sub_area').show()
        //         $(target).addClass('on').siblings('.sub').removeClass('on')
        //     } else { //처음등장
        //         $(this).closest('ul').siblings('.sub_area').stop().slideDown(); 
        //         $(target).addClass('on').siblings('.sub').removeClass('on')
        //         $('.sub_area').addClass('on')
        //     }
        // } else {
        //     $('.dept3').hide();
        //     $('.sub_area').removeClass('on')
        //     $('.sub_area').stop().slideUp();
        // }

    })


    // $('header .gnb > ul > li').mouseover(function () {

    //     if ($(this).hasClass('dept1')) {

    //         if ($('.sub_area').hasClass('on')) { //첫 등장후 깜빡이면서
    //             $('.sub_area').hide()
    //             $(this).children('.sub_area').show();

    //         } else { //처음등장
    //             $(this).children('.sub_area').stop().slideDown();
    //             $('.sub_area').addClass('on')
    //         }
    //     } else {
    //         $('.dept3').hide();
    //         $('.sub_area').removeClass('on')
    //         $('.sub_area').stop().slideUp();
    //     }

    // })




    // // 메뉴영역을 벗어나면

    $('header .gnb').mouseleave(function () {
        $('.dept3').hide();
        $('.sub_area').removeClass('on')
        // $('.sub_area').stop().slideUp();  

    })
    $('header .gnb > ul > li').not('.dept1').mouseover(function () {
        
        $('.dept3').hide();
        $('.sub_area').removeClass('on')
        // $('.sub_area').stop().slideUp();

    })

    //dept2를 마우스 올릴때 쩌리메뉴 나오게하는거

    $('.dept2 > li > a').mouseover(function () {

        // h = $(this).siblings('.dept3').height()

        $('.dept3').hide();
        $(this).siblings('.dept3').show();


    })




    // $('header .dept1').hover(function(){

    //   if($('.sub_area').hasClass('on')){

    //     $(this).children('.sub_area').show();

    //   }else{
    //     $(this).children('.sub_area').stop().slideDown();
    //     $('.sub_area').addClass('on')

    //   }

    // },function(){

    //   if(){

    //   }

    //   $('.sub_area').stop().slideUp()

    // })





    var visual_slide = new Swiper(".visual_slide", {

        loop: true,
        touchRatio: 0,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".visual_slide .next",
            prevEl: ".visual_slide .prev",
        },
        pagination: {
            el: ".visual_slide .swiper-pagination",
        },

    });


    $('.visual_slide .btn').mousemove(function (e) {
        var mouseX = e.offsetX;
        var mouseY = e.offsetY;
        $('.visual_slide .btn .cursor').css({
            left: mouseX + "px",
            top: mouseY + "px",
        })

    });

    $('.visual_slide .btn').mouseover(function () {
        $('.visual_slide .cursor').removeClass('on')
        $(this).find('.cursor').addClass('on')
    });
    $('.visual_slide .btn').mouseleave(function () {
        $('.visual_slide .cursor').removeClass('on')
    });



    // $('.visual_slide .btn').mouseover(function(){
    //   $('.visual_slide .btn .cursor').addClass('on');
    // });

    // $('.visual_slide .btn').mouseleave(function(){
    //   $('.visual_slide .btn .cursor').removeClass('on');
    // });







    var interior_slide = new Swiper(".interior_slide", {
        slidesPerView: "auto",
    });




    $('.style_nav a').click(function (e) {
        e.preventDefault();

        target = $(this).attr('href');

        $(this).addClass('on').parent().siblings().children().removeClass('on')

        $(target).addClass('on').siblings().removeClass('on');

    })


    $('.sc_made .video_wrap').click(function (e) {
        e.preventDefault();
        $('.sc_made .video_wrap #video')[0].src += '?autoplay=1';
        $('.sc_made .video_wrap #video').addClass('on')

    });






    pickArr = [
        '키친/붙박이장',
        '바스/타일',
        '도어',
        '중문',
        '창호',
        '몰딩/월/마루'
    ]

    var pick_slide = new Swiper(".pick_slide", {

        loop: true,

        pagination: {
            el: ".pick_nav",
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className + '">' + pickArr[index] + "</li>";
            },
        },
        touchRatio: 0,
        navigation: {
            nextEl: ".pick_slide .next",
            prevEl: ".pick_slide .prev",
        },
    });


    $('.sc_pick .btn').mousemove(function (e) {
        var mouseX = e.offsetX;
        var mouseY = e.offsetY;
        $('.sc_pick .btn .cursor').css({
            left: mouseX + "px",
            top: mouseY + "px",
        })

    });

    $('.sc_pick .btn').mouseover(function () {
        $('.sc_pick .cursor').removeClass('on')
        $(this).find('.cursor').addClass('on')
    });
    $('.sc_pick .btn').mouseleave(function () {
        $('.sc_pick .cursor').removeClass('on')
    });




});


