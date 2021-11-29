$(document).ready(function() {
    
    /* =======================
        STICKY NAVIGATION 
        =================*/
        /*===HOME===*/
    $('.js--section-products').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
    });

    $('.js--section-book').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').removeClass('sticky');
        } else {
            $('nav').addClass('sticky');
        }
        
    });

    /*
    $('.js--footer').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').removeClass('sticky');
        } else {
            $('nav').addClass('sticky');
        }
        
    },{
        offset: '90%'
    });
    */

    /*===LEARN===*/
    $('.js--did-you-know').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
    },{
        offset: '15%'
    });


    

    
    /*===PRODUCTS===*/
    $('.js--section-products').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
    });

    /* SCROLL ON BUTTONS */
    
    $('.js--scroll-to-products').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-products').offset().top}, 100);
    });
    
    
    /*=== MOBILE NAV ===*/
    $(".js--nav-icon").click(function() {
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon ion-icon");
        nav.slideToggle(200);
        if (icon.attr("name") == "menu-outline") {
           icon.attr("name", "close-outline");
        } 
        else {
           icon.attr("name", "menu-outline")
        }
        /* appear and disappear */
        
    });
    
    /*
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon')
        nav.slideToggle(200);

        if (icon.hasClass('menu-outline')){
            icon.addClass('close-outline');
            icon.removeClass('menu-outline');
        } else{
            icon.removeClass('close-outline');
            icon.addClass('menu-outline');
        }
    });
    */
});

$(function(){

    $(window).bind("resize",function(){
        console.log($(this).width())
        if($(this).width() <900){
        $('.js--center-div').removeClass('u-center-div')
        }
        else{
        $('.js--center-div').addClass('u-center-div')
        }
    })
})

/*
    <ion-icon name="close-outline"></ion-icon>

    var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
      },{
        offset: '25%'
    })

    // Scroll to specific values
    // scrollTo is the same
    window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
    });

    // Scroll certain amounts from current position 
    window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
    });

    // Scroll to a certain element
    document.querySelector('.hello').scrollIntoView({ 
    behavior: 'smooth' 
    });
    */