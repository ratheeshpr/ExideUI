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
    $('#nav-icon-xd').click(function(){
		$(this).toggleClass('open');
        $('.res-menu-outer,.res-menu').toggleClass('open');
	});
    $('.res-menu-outer,.res-cls').click(function(){
        $('.res-menu-outer,.res-menu,#nav-icon-xd').removeClass('open');
    })

});
