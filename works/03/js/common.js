$(function(){



    $('header .search_icon').click(function(e){
        e.preventDefault();
        $('header .search_area').addClass('on');
        $('.dimm').addClass('on');
        $('body').addClass('hidden');


    });

    $('header .close').click(function(e){
        e.preventDefault();
        $('header .search_area').removeClass('on');
        $('body').removeClass('hidden');
        $('.dimm').removeClass('on')
    });
        


    $('header .menu').click(function(e){
        e.preventDefault();
        $('header .menu_area').toggleClass('on');
        $('.dimm').toggleClass('on')
        $('body').toggleClass('hidden');
        $('header .menu').toggleClass('on')
        $('header').toggleClass('menu_open')
    })
    
    $('body').click(function(e){
        if( !$('.util_wrap,.menu_wrap').has(e.target).length ){
            $('header .menu_area').removeClass('on');
            $('header .menu').removeClass('on')
            $('header .search_area').removeClass('on');
            $('body').removeClass('hidden')
            $('.dimm').removeClass('on');
        }
    });
    
    
    $(".fix_btn .top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });


    $('.menu_area .dept1').mouseover(function(){

        $('.menu_area .dept2').removeClass('on')
        $(this).children('.dept2').addClass('on')
        // $('.menu_area .dept2').hide();
        // $(this).children('.dept2').show(); 
    
    })
    
    $('.menu_area .dept1').mouseleave(function(){
        $('.menu_area .dept2').removeClass('on')
        // $('.menu_area .dept2').hide();
    })



    $('.menu_area .lang .kor').click(function(e){
        e.preventDefault();
        // $('.lang .sub_lang').toggleClass('on')
        $('.lang .sub_lang').stop().slideToggle();
        $('.lang .kor').toggleClass('on');
    })

        
    // $('header .search_area').keypress(function(){
        
    //     if($('header .search').hasClass('on')){
    //         $('header .search').removeClass('on')

    //     }else{
    //         $('header .search').addClass('on')   
    //     }

    // })


    $(window).scroll(function(){

        curr = $(window).scrollTop();

        target = $('.sc_product').offset().top;

        if(curr > target){
            $('.top_btn').addClass('on');
            if($('.search_area').hasClass('on')){
                $('header').removeClass('hidden');
            }else{
                $('header').addClass('hidden');
            }  
            
        }else{
            $('.top_btn').removeClass('on');
            $('header').removeClass('hidden');
        };

    });


    $(window).scroll(function(){

        curr = $(window).scrollTop();


        target = $('footer').offset().top - 200;

        if(curr > target){
            // $('.fix_btn').addClass('on');
            // $('.top_btn').css({opacity:0.4})
            $('.fix_btn').css({opacity:0.4})
        }else{
            // $('.fix_btn').removeClass('on');
            // $('.top_btn').css({opacity:1})
            $('.fix_btn').css({opacity:1})
        }

    });

    $('body').on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;

        if($(window).scrollTop() > $('.sc_product').offset().top){

            $('header').addClass('hidden');
            if(wheel > 0){
                $('header').removeClass('hidden');
            }else{
                $('header').addClass('hidden');
            }
            
        }else{
            $('header').removeClass('hidden');
        }

    });




    $(window).scroll(function(){

        curr = $(window).scrollTop();

        if(curr > 50){
            $('header').addClass('minimize')
        }else{
            $('header').removeClass('minimize')
        }

    });

    
    // $('.dept1').click(function(e){
    //     e.preventDefault();  
    //     if($('.dept2').hasClass('focusin')){
    //         if($(this).children('.dept2').hasClass('focusin')){
    //             $('.dept2').removeClass('focusin')
    //         }else{
    //             $('.dept2').removeClass('focusin')
    //             $(this).children('.dept2').addClass('focusin')
    //         }
    //     }else{
    //         $(this).children('.dept2').addClass('focusin')
    //     }
    // })



    $('.dept1').click(function(e){
        e.preventDefault();  
        if($(this).children('.dept2').hasClass('focusin')){
            $('.dept2').removeClass('focusin')
        }else{
            $('.dept2').removeClass('focusin')
            $(this).children('.dept2').addClass('focusin')
        }
    })




})