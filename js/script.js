$(document).ready(function(){
  
    $(window).on('scroll',function(){
        console.log($(this).scrollTop());
        if($(window).scrollTop()>50){
            
            $('.demo').addClass("fixed");
        }
        else{
            $('.demo').removeClass("fixed");
        }
       
    })
    $('.nav2 ul li').on('click',function(){
        $('.nav2 ul li').removeClass('active');
        $(this).addClass('active');
        
    });

    $('.recent .eventProject .event button').on('click',function(){
        var show = $(this).attr('class');//get value of propeties
      
        $('.recent .eventProject .event button').removeClass('.recent .eventProject .event active');
        $(this).addClass('.recent .eventProject .event active');
       
        if(show == 'all'){
            $('.grid-container').children('div.grid-item').show();
        }
        else{
            $('.grid-container').children('div:not(.' +show+')').hide();
            $('.grid-container').children('div.'+show).show();
        }
        return false;
    });
    $('#owlLogo').owlCarousel({
        loop:true,
        margin:10,
         //nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
    $('#owlComment').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // var obj = [
    //     {img:'../img/pic-1.jpg'},
    //     {img:'../img/pic-2.jpg'},
    //     {img:'../img/pic-3.jpg'},
    //     {img:'../img/pic-4.jpg'},
    //     {img:'../img/pic-5.jpg'},
    //     {img:'../img/pic-6.jpg'},
    //     {img:'../img/pic-7.jpg'},
    //     {img:'../img/pic-8.jpg'},
    //     {img:'../img/pic-9.jpg'},
    //     {img:'../img/pic-10.jpg'},
    //     {img:'../img/pic-11.jpg'},
    //     {img:'../img/pic-12.jpg'},
    // ]
    // for(var i= 0; i< obj.length;i++){
        
    // }

})