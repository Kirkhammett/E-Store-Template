$(document).ready(function () {
    $("#BtnOpen").each(function () {
        $("a strong", this).css("opacity", "0");
        $("a strong", this).css("display", "block");
    });

    $("#BtnOpen1").each(function () {
        $("a strong", this).css("opacity", "0");
        $("a strong", this).css("display", "block");
    });

    $("#BtnOpen").hover(function () {
        $(this)
            .stop().fadeTo(100, 1)
            .siblings().stop().fadeTo(1000, 0.4);

        $("a strong", this)
            .stop()
            .animate({
            opacity: 5,
            top: "10px"
        }, 200);
    },

    function () {
        $(this)
            .stop().fadeTo(100, 1)
            .siblings().stop().fadeTo(1000, 1);

        $("a strong", this)
            .stop()
            .animate({
            opacity: 0,
            top: "10px"
        }, 200);
    });

    $("#BtnOpen1").hover(function () {
        $(this)
            .stop().fadeTo(100, 1)
            .siblings().stop().fadeTo(1000, 0.4);

        $("a strong", this)
            .stop()
            .animate({
            opacity: 5,
            top: "10px"
        }, 200);
    },

    function () {
        $(this)
            .stop().fadeTo(100, 1)
            .siblings().stop().fadeTo(1000, 1);

        $("a strong", this)
            .stop()
            .animate({
            opacity: 0,
            top: "10px"
        }, 200);
    });
});

function smeni(x) {
    x.src = "style/wishlist1.png";
}

function normalna(x) {
    x.src = "style/wishlist.png";
}

function smeni2(x) {
    x.src = "style/fullcart1.png";
}

function normalna2(x) {
    x.src = "style/fullcart.png";
}