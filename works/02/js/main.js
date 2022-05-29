$(function(){



    // sc_visual   

    gsap.from(".sc_visual .wrap", {
        y: 30,
        opacity:0,
        stagger:{
            from: "random",
            amount: 2,   
        }
    });

    gsap.from(".sc_visual .book", {
        delay:2.5,
        opacity:0,
    });


    // sc_creative

    const textmoiton = gsap.timeline({
        defaults:{
            duration:0.5,
        },
    })

    textmoiton.addLabel('label1')
    .to('.sc_creative .line01',{xPercent:-30},'label1')
    .to('.sc_creative .line02',{xPercent:15},'label1')
    .to('.sc_creative .line03',{xPercent:55},'label1')
    

    ScrollTrigger.create({
        animation: textmoiton,
        trigger:".sc_creative .line02",
        start:"50% 100%",
        end:"bottom 100%",
        // markers:true,
        // scrub:"0.5",
        // pin:"",
        onLeaveBack:()=>{
            textmoiton.reverse(); 
        },

    })


    const fixmotion = gsap.timeline({})
    
    fixmotion.to('.sc_creative .img_wrap',{yPercent:-180})

    // const fixmotion_1 = gsap.timeline({})
    // fixmotion_1.set('.sc_creative .img_wrap',{opacity:0})
    // .to('.sc_creative .img_wrap',{opacity:1,duration:1})
        
    ScrollTrigger.create({
        animation:fixmotion,
        trigger:".sc_creative",
        start:"top top",  
        end:"+=3000", 
        // markers:true,  
        scrub:0.5,
        pin:true,           
    }),



    // ScrollTrigger.create({
    //     animation:fixmotion_1,
    //     trigger:".sc_creative",
    //     start:"top top",  
    //     // end:"+=3000", 
    //     // markers:true,  
    //     // scrub:0.5,
    //     // pin:true,           
    // })


// 검은화면으로 바뀌는 모션
    ScrollTrigger.create({
        trigger:".sc_nature",
        start:"top 40%",
        // markers:true,
        onEnter:()=>{
            $('body').addClass('black')
        },
        onLeaveBack:()=>{
            $('body').removeClass('black')
        }
    })

    // sc_nature
  
    const fixmotion2 = gsap.timeline({
        defaults:{
            delay:0.5
        },
        scrollTrigger:{
            trigger:".sc_nature",
            start:"top top",
            end:"+=2000%",
            // markers:true,
            scrub:0.5,
            pin:true,
            onLeave:()=>{
                $('body').removeClass('black')
            }
        }

    })

    fixmotion2.to('.sc_nature .wrap',{
        xPercent:-100,
        x:'100vw',
        duration:9.5
    })
    .to('.sc_nature .wrap',{duration:0.5})




    const natureTxt01 = new SplitType('.sc_nature .nature01 .txt', { types: 'words, chars', });
    
    const txtMotion01  = gsap.fromTo(natureTxt01.chars,{
        opacity:0,
        yPercent:100

    },{
        opacity:1,
        stagger:0.03,
        yPercent:0,

    })  
    txtMotion01.pause();


    ScrollTrigger.create({
        trigger:".nature01",
        start:"top top",
        onEnter:()=>{
            txtMotion01.restart();
        },
    })


    // const natureAll = $('.sc_nature .wrap').outerWidth();
    // const nature03 = $('.sc_nature .wrap .nature03').offset().left;
    // const result = nature03/natureAll*100;
    // a = result2000/100;
    // console.log(a);



    const txtMotion02  = gsap.fromTo('.sc_nature .wrap .nature03 strong span',{
        opacity:0,
        yPercent:100

    },{
        opacity:1,
        stagger:0.1,
        yPercent:0,
    })  
    txtMotion02.pause();

    ScrollTrigger.create({
        trigger:".nature01",
        start:"+500%",
        onEnter:()=>{
            txtMotion02.play();
        },
    })



    const natureTxt02 = new SplitType('.sc_nature .nature04 span', { types: 'words, chars', });
    
    const txtMotion03  = gsap.fromTo(natureTxt02.chars,{
        opacity:0,
        yPercent:100

    },{
        opacity:1,
        stagger:0.03,
        yPercent:0,

    })  
    txtMotion03.pause();


    ScrollTrigger.create({
        trigger:".nature04",
        start:"+800%",
        onEnter:()=>{
            txtMotion03.play();
        },
    })

    


    const imgMotion = gsap.timeline({})
    imgMotion.set('.nature04 figure',{opacity:0})
    .to('.nature04 figure',{opacity:1,duration:1})
    
    ScrollTrigger.create({
        animation:imgMotion,
        trigger:".nature04 figure",
        start:"900%",  
        // markers:true,  
        onEnter:()=>{
            $('.nature04 figure').addClass('on')
        },
    })

 


    const txtMotion04  = gsap.fromTo('.sc_nature .nature05 strong span',{
        opacity:0,
        yPercent:100,
    },{
        opacity:1,
        stagger:0.2,
        yPercent:0,
    },)  
    txtMotion04.pause();

    ScrollTrigger.create({
        trigger:".nature05",
        start:"+1400%",
        onEnter:()=>{
            txtMotion04.play();
        },

    })





    const titMotion02 = gsap.timeline({
        defaults:{
            duration:0.5,
        },
    })

    titMotion02.addLabel('label1')
    .set('.sc_tech .info_wrap .info01 h3',{opacity:0,yPercent:50},'label1')
    .to('.sc_tech .info_wrap .info01 h3',{opacity:1,yPercent:0},'label1')
    .set('.sc_tech .info_wrap .info01 span',{opacity:0,yPercent:50},'label1')
    .to('.sc_tech .info_wrap .info01 span',{opacity:1,yPercent:0,stagger:0.1,},'label1+=0.1')
    .set('.sc_tech .info_wrap .info02 h3',{opacity:0,yPercent:50},'label1')
    .to('.sc_tech .info_wrap .info02 h3',{opacity:1,yPercent:0},'label1')
    .set('.sc_tech .info_wrap .info02 span',{opacity:0,yPercent:50},'label1')
    .to('.sc_tech .info_wrap .info02 span',{opacity:1,yPercent:0,stagger:0.1,},'label1+=0.1')

    ScrollTrigger.create({
        animation:titMotion02,
        trigger:".sc_tech .info_wrap",
        start:"top 90%",  
        end:"bottom top",
        // markers:true,  
        // onEnter:()=>{
        //     abc.play();
        // }
    })




    const titMotion03 = gsap.timeline({})

    titMotion03.set('.sc_explore h2 span',{opacity:0,yPercent:100})
    .to('.sc_explore h2 span',{opacity:1,yPercent:0,stagger:0.1})

    
    ScrollTrigger.create({
        animation:titMotion03,
        trigger:".sc_explore h2",
        start:"top 85%",  
        // end:"bottom top",     
        // markers:true,

    })







    $('.title_wrap').each(function(index,item){
        const titMotion = gsap.timeline({
            defaults:{
                duration:0.5,
            },
        })

        titMotion.addLabel('label1')
        .set(item,{opacity:0,yPercent:30},'label1')
        .to(item,{opacity:1,yPercent:0},'label1')
        .set('.title_wrap span',{opacity:0,yPercent:50},'label1')
        .to('.title_wrap span:nth-child(1)',{opacity:1,yPercent:0},'label1')
        .set('.title_wrap span',{opacity:0,yPercent:50},'label1')
        .to('.title_wrap span:nth-child(2)',{opacity:1,yPercent:0},'label1+=0.1')
        .set('.title_wrap span',{opacity:0,yPercent:50},'label1')
        .to('.title_wrap span:nth-child(3)',{opacity:1,yPercent:0},'label1+=0.2')


        // .fromTo('.title_wrap p span',{
        //     opacity:0,
        //     yPercent:100
  
        // },{
        //     opacity:1,
        //     stagger:0.1,
        //     yPercent:0,
        // },'label1') 
        // .set('.title_wrap h2',{opacity:0,yPercent:100},'label1')
        // .to('.title_wrap h2',{opacity:1,yPercent:0},'label1')
        // .set('.title_wrap p',{opacity:0,yPercent:50},'label1')
        // .to('.title_wrap p',{opacity:1,yPercent:0},'label1+=0.3')
        // .set('.title_wrap a',{yPercent:100},'label1')
        // .to('.title_wrap a',{yPercent:0},'label1')
        ScrollTrigger.create({
            animation:titMotion,
            trigger:item,
            start:"50% 90%",  
            end:"bottom top",
            // markers:true,  
            // onEnter:()=>{
            //     abc.play();
            // }
        })
    })




    $('.img_event').each(function(index,item){

        const fixmotion_1 = gsap.timeline({})
        fixmotion_1.set(item,{opacity:0})
        .to(item,{opacity:1,duration:1})
        

        ScrollTrigger.create({
            animation:fixmotion_1,
            trigger:item,
            start:"top 60%",  
            // markers:true,  

            onEnter:()=>{
                $(item).addClass('on')
            }

        })
    })





})