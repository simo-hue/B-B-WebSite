jQuery("#backtodown").click(function () {
    jQuery("body,html").animate({
        scrollDown: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollDown() > 150) {
        jQuery("#backtodown").addClass("visible");
    } else {
        jQuery("#backtodown").removeClass("visible");
    }
});