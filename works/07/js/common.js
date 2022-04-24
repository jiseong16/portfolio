$(function(){


    $('#lang_btn').click(function(){
        link = $('#lang').val();    
        window.open(link, "_blank");  

    })


        
    $('.logo_area .menu').click(function(e) {
        e.preventDefault();
        $('.logo_area .menu_area').addClass('on')
        $('.dimm').addClass('on')
    });


    $('.logo_area .close').click(function(e) {
        e.preventDefault();
        $('.logo_area .menu_area').removeClass('on')
        $('.dimm').removeClass('on')
    });



    $('.gnb .field > a').click(function(e){
        e.preventDefault();
        $('.gnb_area .field_area').toggleClass('on');
    
    });


   $('.gnb .all_menu > a').click(function(e){
        e.preventDefault();
        $('.gnb_area .all_menu_area').toggleClass('on');
        $('.all_menu .menu_line').toggleClass('on')
    
    });


  $('.all_menu_area .tab_nav').click(function(e){
        e.preventDefault();
        $(this).parent('.menu').addClass('on').siblings('.menu').removeClass('on')
    
    });

        
    $('footer .top_btn').click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });


    
})