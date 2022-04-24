$(function(){

    //메인 비주얼 gsap + 스크롤트리거
    // gsap +  스크롤트리거
    // 모션 라이브러리



    // gsap.to() //~에게 완료될 모션을 주는거
    // gsap.from() //~부터 완료전의 주는거

    // gsap.to('.sc_visual',{

    //     scrollTrigger:{
    //         trigger:".sc_visual", //시발점
    //         start:"top top",  //[타켓의 시작위치, 윈도우 시작위치]
    //         end:"bottom top",   // [타켓의 끝위치, 윈도우 끝위치]
    //         markers:true,  //표시자
    //         scrub:0.5
    //     },

    //    'background-position':'50% 20%'  
    // })

    // const jhgjhgjh = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:"",
    //         start:"",
    //         end:"",
    //         markers:

    //     }

    // })



    const mainVis = gsap.timeline({

        scrollTrigger:{
            trigger:".sc_visual", //시발점
            start:"top top",  //[타켓의 시작위치, 윈도우 시작위치]
            end:"bottom top",   // [타켓의 끝위치, 윈도우 끝위치]
            // markers:true,  //표시자
            scrub:0.5
        },
    })


    mainVis.addLabel('label1')
    .to('.title01',{x:120},'label1')
    .to('.title02',{x:-120},'label1')
    .to('.sc_visual',{'background-position':'50% 20%'},'label1')




    const fixMotion1 = gsap.timeline({

        scrollTrigger:{
            trigger:".sc_intro .title",
            start:"top top",
            end:"+=5000",
            // markers:true,
            scrub:0.5,
            pin:true,
        },
    })



    fixMotion1
    .set('.sc_intro h2 div',{opacity:0,y:0})
    .to('.sc_intro h2 div:nth-child(1)',{opacity:1,y:-300})
    .set('.sc_intro h2 div',{opacity:0,y:0})
    .to('.sc_intro h2 div:nth-child(2)',{opacity:1,y:-300})
    .set('.sc_intro h2 div',{opacity:0,y:0})
    .to('.sc_intro h2 div:nth-child(3)',{opacity:1,y:-300})
    .set('.sc_intro h2 div',{opacity:0,y:0})
    .to('.sc_intro h2 div:nth-child(4)',{opacity:1,y:-300})







    //고정 모션

    const fixMotion2 = gsap.timeline({

        scrollTrigger:{
            trigger:".sc_intro .img_area",
            start:"top top",  
            // end:"bottom top",
            end:"+=5000",
            // markers:true,  
            scrub:0.5,
            pin:true,
        },
    })


    fixMotion2.from('.sc_intro .img_area .img02 img',{scale:5, yPercent:50})
    .addLabel('label1','<0.3') //0.3 땡긴다.
    .from('.sc_intro .img_area .img01',{scale:2, xPercent: -250},'label1' )
    .from('.sc_intro .img_area .img03',{scale:2, xPercent: 250},'label1' )
    .from('.sc_intro .img_area p',{yPercent: 200},'label1')





    // const fixMotion = gsap.timeline({

    //     scrollTrigger:{
    //         trigger:".sc_intro .img_area", //시발점
    //         start:"top top",  //[타켓의 시작위치, 윈도우 시작위치]
    //         // end:"bottom top",   // [타켓의 끝위치, 윈도우 끝위치]
    //         end:"+=5000", //강제로 스크롤5천만큼해라   // [타켓의 끝위치, 윈도우 끝위치]
    //         markers:true,  //표시자
    //         scrub:0.5,
    //         pin:true,
    //     },
    // })


    

    let scVideoH = $('.sc_color').outerHeight() - $('.sc_color .wrapper').outerHeight()

    gsap.to('.sc_color .wrapper',{
        scrollTrigger:{
            trigger:".sc_color", 
            start:scVideoH+"px top",
            // end:"bottom top",  
            end:"+=5000", 
            // markers:true,
            scrub:0.5,
            pin:true,
            
        },

    })

    gsap.to('.sc_color .color_wrap',{

        scrollTrigger:{
            trigger:".sc_color .color_wrap",
            start:"top 100%",  
            // end:"bottom top",
            end:"+=5000", 
            // markers:true, 
            scrub:0.5,
        },
        xPercent: -125,
        
    })


    




    const tapMotion = gsap.timeline({
        defaults:{
            duration:1,
            delay:0.2,
        },
        scrollTrigger:{
            trigger:".sc_battery",
            start:"top 50%", 
            // end:"bottom top",
            // end:"+=5000",
            // markers:true, 
            // scrub:0.5, // 

            onEnter:()=>{
                tapMotion.restart();
            },
            onEnterBack:()=>{
                tapMotion.restart();
            },

        },
    })

    tapMotion.addLabel('label1')
    .from('.sc_battery .tab_cont .cont .img01',{opacity:0,scale:1.2},'label1')
    .from('.sc_battery .tab_cont .cont .badge_wrap',{opacity:0},'label1+=0.5')




    $('.sc_battery .tab_nav a').click(function(e){
        e.preventDefault();  
        tapMotion.restart();
        target = $(this).attr('href')
        
        if($(this).hasClass('studio')){
            // alert(1)
            $(this).parent('.tab').addClass('on')
            $(this).addClass('on').siblings().removeClass('on')
        }else{  
            $(this).parent('.tab').removeClass('on')
            $(this).addClass('on').siblings().removeClass('on')
        }
        // $(this).parent('.tab').toggleClass('on')
        // $(this).parent('.tab').addClass('on').siblings().removeClass('on')
        // $(this).addClass('on').siblings().removeClass('on')
        $(target).removeClass('on').siblings().addClass('on');
        // $(target).addClass('on').siblings().removeClass('on');

        // if($('#studio').hasClass('on')){
        //     $('.sc_place').addClass('on')
        //     $('.sc_place .mark svg').addClass('on')

        // }else{
        //     $('.sc_place').removeClass('on')
        //     $('.sc_place .mark svg').removeClass('on')
        // }

    })


    //sc_experience
   
    const fixMotion3 = gsap.timeline({

        scrollTrigger:{
            trigger:".sc_experience",
            start:"top top",
            end:"+=5000",
            // markers:true,
            scrub:0.5,
            pin:true,
        },
    })


    fixMotion3.addLabel('label1')
    .set('.sc_experience .txt_wrap strong',{'-webkit-text-stroke':'1px #888',color:'transparent'})
    .to('.sc_experience .txt_wrap strong:nth-child(1)',{'-webkit-text-stroke':'1px #fff',color:'#fff'})
    .set('.sc_experience .txt_wrap strong',{'-webkit-text-stroke':'1px #888',color:'transparent'})
    .to('.sc_experience .txt_wrap strong:nth-child(2)',{'-webkit-text-stroke':'1px #fff',color:'#fff'})
    .set('.sc_experience .txt_wrap strong',{'-webkit-text-stroke':'1px #888',color:'transparent'})
    .to('.sc_experience .txt_wrap strong:nth-child(3)',{'-webkit-text-stroke':'1px #fff',color:'#fff'})
    .set('.sc_experience .txt_wrap strong',{'-webkit-text-stroke':'1px #888',color:'transparent'})
    .to('.sc_experience .txt_wrap strong:nth-child(4)',{'-webkit-text-stroke':'1px #fff',color:'#fff'})


})