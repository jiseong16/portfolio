
$(function(){

    

    const leftMotion = gsap.timeline({})
    leftMotion.addLabel('label')
    .to('.loading_page strong',{xPercent:-35,delay:1,duration:0.1},'label')
    .to('.loading_page .txt01',{opacity:0,delay:1},'label')
    .to('.loading_page .txt02',{opacity:0,delay:1.3},'label')
    .to('.loading_page .txt03',{opacity:0,delay:1.6},'label')
    .to('.loading_page .txt04',{opacity:0,delay:2.8},'label')
    .to('.loading_page',{yPercent:-100,delay:3,ease: Power4.easeIn},'label')
    .fromTo('.sc_intro h2',{
        yPercent:100,
        opacity:0
        
    },{
        yPercent:0,
        opacity:1,
        
    })
    



    gsap.to('.sc_intro .scroll_bar',{
        scrollTrigger:{
            trigger:".scroll_bar",
            start:"top 30%",
            end:"bottom top",
            // markers:true,
            scrub:0.5,
        },
        yPercent:-50,
    })
 




    $(window).scroll(function(){
        curr = $(window).scrollTop();
        
        target = $('.sc_project').offset().top;

        if(curr > target){
            $('header .top_area').addClass('on')
        }else{
            $('header .top_area').removeClass('on')
        }

        

    })


/* <li>
<span class="num"></span>
<h3></h3>
<a href=""><figure><img src="" alt=""></figure></a>
<p class="desc"></p>
<div class="icons"></div>
</li> */




    $.getJSON('./js/works.json', null, function (data, status) {
        if (status == "success") {
            var html = '';
            $.each(data, function (index, works) {

                skillArr = works.skill.split(',');

                console.log(skillArr)

                var num = index++;
                (num < 10) ? num = '0' + index: num = index;
                console.log(num);

                html += '<li><span class="num">' + num + '</span>';
                html += '<h3>' + works.name + '</h3>';
                html += '<a href="' + works.linkSrc + '" class="img_wrap"><figure><img src="' + works.imgSrc + '" alt=""><figcaption class="badge">'+ works.badge + '</figcaption></figure></a>';
                html += '<p class="desc">' + works.desc + '</p>';
                html += '<div class="links"><a href="' + works.linkSrc + '" class="link_works">프로젝트 바로가기</a><a href="' + works.notionSrc + '" class="link_notion">코드리뷰</a></div>';
                html += '<div class="icons">';
                skillArr.forEach(skill => {
                    html += '<span>' + skill + '</span>'
                });
                html += '</div></li>';
            });
            $('.sc_project ul').append(html)

            // 스크롤 트리거
            gsap.utils.toArray(".sc_project li").forEach(section => {

                const Motion = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 90%",
                        end: "top top",
                        // markers: true,
                        scrub: 0.5,
                    }
                })
                Motion.set(section, {
                        opacity: 0
                    })
                    .to(section, {
                        opacity: 1
                    })
            })

        } else if (status == "error" || status == "parsererror") {
            alert("An error occured");
        }

    });



})