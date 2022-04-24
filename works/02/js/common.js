$(function(){


    $('header .menu_btn').click(function(e){
        e.preventDefault();
        if($(this).children('.close').hasClass('on')){
            $('header').removeClass('on')
            $('header .menu').removeClass('on')
            $('body').removeClass('hidden')
            $('.colorbox').removeClass('on')
            $('.colorbox .box').removeClass('on')
            $('.menu nav').removeClass('on')
            $('.menu_btn .close').removeClass('on')
            $('.menu_btn').removeClass('on')
        }else{
            $('header').addClass('on')
            $('header .menu').addClass('on')
            $('body').addClass('hidden')
            $('.colorbox').addClass('on')
            $('.colorbox .box').addClass('on')
            $('.menu nav').addClass('on')
            $('.menu_btn .close').addClass('on')
            $('.menu_btn').addClass('on')
        }

    })





    $(window).scroll(function(){

        curr = $(window).scrollTop();

        if(curr > 0){
            $('.search_btn').addClass('on')
        }else{
            $('.search_btn').removeClass('on')
        }

    });
        
    // $('body').on('mousewheel',function(e){ 
    //     var wheel = e.originalEvent.wheelDelta; 

    //     if(wheel>0){ 
            
    //         $('.search_btn').removeClass('on')  
  
    //     }else{
    //         $('.search_btn').addClass('on') 
    //     }

        
    // });
        


    
})