$(function(){


    $(window).scroll(function(){

        curr = $(window).scrollTop();

        if(curr > 100){
            $('header').addClass('on')
        }else{
            $('header').removeClass('on')
        }

    });


    //나오는 영역 제외하고 클릭했을때!

    $('body').click(function(e){
        
        if( !$('.util_wrap').has(e.target).length ){
            
            $('.search_area').removeClass('on');
            $('body').removeClass('hidden')
        }
    });


    $('header .search_icon').click(function(e){
        e.preventDefault();

        $('.search_area').addClass('on');
        $('body').addClass('hidden')
    })

    $('header .close').click(function(e){
        e.preventDefault();

        $('.search_area').removeClass('on');
        $('body').removeClass('hidden')
    })
    



})