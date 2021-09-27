$(document).ready(function() {
    
    /* STICKY NAVIGATION */
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
    });

    $('.js--footer').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').removeClass('sticky');
        } else {
            $('nav').addClass('sticky');
        }
        
    },{
        offset: '25%'
    });

    /* SCROLL ON BUTTONS */
    $('.js--scroll-to-products').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-products').offset().top}, 1000);
    });

    /*
    $('.js--scroll-to-stories').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-stories').offset().top}, 1000);
    });
    */

    /* NAVIGATION SCROLL */
    
});

/*
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