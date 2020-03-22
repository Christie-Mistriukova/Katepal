$(document).ready(function() {

    $(".sliderLeft ul").lightSlider({
        auto: true,
        item: 1,
        slideMove: 1,
        loop: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        pager: false,
        prevHtml: '<button class="btn btn--prev"><img src="./img/arr_l.png" alt=""></button>',

    });
    $(".sliderRight ul").lightSlider({
        auto: true,
        item: 1,
        slideMove: 1,
        loop: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        mode:'fade',
        controls: false
        // nextHtml: '<button class="btn btn--next"><img src="./img/arr_r.png" alt=""></button>',
    });

    $(".sliderRight--content").lightSlider({
        auto: true,
        item: 1,
        slideMove: 1,
        loop: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        nextHtml: '<button class="btn btn--next"><img src="./img/arr_r.png" alt=""></button>',
        pager: false,
        freeMove: false
    });

    // getSlider()
    $('.containerHeader--burger').on('click', function(e) {
        $(".containerHeader--menu--left--wrapper").animate({width: 'toggle'});
    });

    $('.closeMenu').on('click', function(e){
        $(".containerHeader--menu--left--wrapper").animate({width: 'toggle'});
    });

    $('ul.containerHeader--menu--left li ul').parent().addClass("innerMenu");
    $('ul.containerHeader--menu--left li.innerMenu:after').on('click', function(e) {
        $('.containerHeader .containerHeader--left .containerHeader--menu ul.containerHeader--menu--left li ul').sibling().toggle();
    });

    new WOW().init();
    // $(document).on( 'scroll', function(){
    //     $('h1').addClass("wow fadeInLeft")
    // })

});