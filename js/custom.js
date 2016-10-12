// credit where credit's due; http://thecodeplayer.com/walkthrough/ripple-click-effect-google-material-design
$(document).ready(function () {


    var element, circle, d, x, y;
    $("button span,.btn-effect").click(function (e) {

            element = $(this);

            if (element.find(".circle").length == 0)
                element.prepend("<span class='circle'></span>");

            circle = element.find(".circle");
            circle.removeClass("animate");

            if (!circle.height() && !circle.width()) {
                d = Math.max(element.outerWidth(), element.outerHeight());
                circle.css({
                    height: d,
                    width: d
                });
            }

            x = e.pageX - element.offset().left - circle.width() / 2;
            y = e.pageY - element.offset().top - circle.height() / 2;

            circle.css({
                top: y + 'px',
                left: x + 'px'
            }).addClass("animate");
        })
        ////*************///

    //for toggle search
    $('.toggle-xd').click(function () {
        $(this).parent('.search_top').toggleClass('open');
    });
    //for hangberger animation//res menu
    $('#nav-icon-xd').click(function () {
        $(this).toggleClass('open');
        $('.res-menu-outer,.res-menu').toggleClass('open');
    });
    $('.res-menu-outer,.res-cls').click(function () {
        $('.res-menu-outer,.res-menu,#nav-icon-xd').removeClass('open');
    })
    $('.toggle-footer-tab').click(function () {
        $('.footer-tab').slideToggle();
        $("html, body").animate({
            scrollTop: $(document).height() + 1500
        }, "slow");
        $(this).toggleClass('open')
    });
    $('.close-ftr').click(function () {
        $('.footer-tab').slideToggle();
        $('.toggle-footer-tab').toggleClass('open')
    });


    //slider Tools &Calculators
    $('.tools-calculators').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items:1,
        dots:false,
         navText: ["<i class='exd-left'></i>", "<i class='exd-right'></i>"],
    })
    //slider Serving
    $('.serving-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots:false,
        items:1,
         navText: ["<i class='exd-left'></i>", "<i class='exd-right'></i>"],
    })
    //slider News
    $('.news-slider').owlCarousel({
        loop: true,
        margin: 0,
        items:1,
        nav:false,
        autoplay:true,
    })
    //
    $('.sub-menu-toggle').click(function(){
        $(this).siblings('ul').slideToggle();
    });
    $('.sub-menu-toggle').siblings('ul').hide();

});
