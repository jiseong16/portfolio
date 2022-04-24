$(function(){

    $('.sc_slide h3 a').click(function(e){
        e.preventDefault();
        $(this).closest('.slide').addClass('on').siblings('.slide').removeClass('on')
        if($(this).closest('.slide').hasClass('slide02')){
            if($('.slide02 .play').css('display') != 'none'){
                slide01.autoplay.stop();
                slide02.autoplay.stop();
            }else{
                slide01.autoplay.stop();
                slide02.autoplay.start();
            }

        }else{ 
            if($('.slide01 .play').css('display') != 'none'){
                slide01.autoplay.stop();
                slide02.autoplay.stop();
            }else{
                slide01.autoplay.start();
                slide02.autoplay.stop();
            }
        
        }
    })

    var slide01 = new Swiper(".slide01 .visual_slide", {
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".slide01 .fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".slide01 .next_btn",
            prevEl: ".slide01 .prev_btn",
        },
    });

    $('.slide01 .play_btn .btn').click(function(e){
        e.preventDefault();

        if($(this).hasClass('play')){
            slide01.autoplay.start();
            $('.slide01 .pause').show();
            $('.slide01 .play').hide();


        }else{
            slide01.autoplay.stop();
            $('.slide01 .pause').hide();
            $('.slide01 .play').show();
        }



    })



    var slide02 = new Swiper(".slide02 .visual_slide", {
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".slide02 .fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".slide02 .next_btn",
            prevEl: ".slide02 .prev_btn",
        },
    });

   
    slide02.autoplay.stop();


    $('.slide02 .play_btn .btn').click(function(e){
        e.preventDefault();

        if($(this).hasClass('play')){
            slide02.autoplay.start();
            $('.slide02 .pause').show();
            $('.slide02 .play').hide();


        }else{
            slide02.autoplay.stop();
            $('.slide02 .pause').hide();
            $('.slide02 .play').show();
        }



    })




    $('.sc_news .tab').click(function(e){
        e.preventDefault();
    
        
        target = $(this).attr('href');
        $('.sc_news .tab').parent().removeClass('on')
        $(this).parent().addClass('on')
    
        $(target).addClass('on').parent().siblings().children('.tab_con').removeClass('on')

      })

    
})