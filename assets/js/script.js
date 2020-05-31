$(document).ready(function () {

    /*sticky navigation*/
    $('.js--section-about').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    
    /*Mobile Navigation*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');

        nav.slideToggle(200);
    })
});