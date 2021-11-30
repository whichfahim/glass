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

});