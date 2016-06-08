$(document).ready(function () {
    $("#jquery li").each(function () {
        $("a strong", this).css("opacity", "0");
    });

    $("#jquery li").hover(function () {
        $(this)
            .stop().fadeTo(500, 1)
            .siblings().stop().fadeTo(500, 0.2);

        $("a strong", this)
            .stop()
            .animate({
            opacity: 1,
            top: "-10px"
        }, 300);

    },

    function () {
        $(this)
            .stop().fadeTo(500, 1)
            .siblings().stop().fadeTo(500, 1);

        $("a strong", this)
            .stop()
            .animate({
            opacity: 0,
            top: "-10px"
        }, 300);
    });

});