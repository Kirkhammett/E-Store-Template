$(function () 
{
    $('#BtnOpen').click(function () {
        $("#skrieno").animate({
            width: 'toggle'
        });
        //$("#skrieno").toggle("slide", {direction:'right'}, 500);
        $("#skrieno2").hide();
        //$("#skrieno").slideToggle(800);
    });

    $('#BtnOpen1').click(function () {
        $("#skrieno2").animate({
            width: 'toggle'
        });
        $("#skrieno").hide();
        //$("#skrieno2").toggle("slide", {direction:'right'},500);
        //$("#skrieno2").slideToggle(800);	
    });

    var sirina = 720;
    var brzina_anim = 1000;
    var pauza = 7000;
    var segasenSlajd = 1;

    var $slajder = $('#slajder');
    var $slajderWrapper = $('.lizgac', $slajder);
    var $lizgac = $('.lizgaj', $slajder);

    var interval;

    function zapocniSlajder() {
        interval = setInterval(function () {
            $slajderWrapper.animate({
                'margin-left': '-=' + sirina
            }, brzina_anim, function () {
                if (++segasenSlajd === 6) {
                    segasenSlajd = 1;
                    $slajderWrapper.css('margin-left', 0);
                }
            });
        }, pauza);
    }

    function pauzaSlajder() {
        clearInterval(interval);
    }

    $slajderWrapper.on('mouseenter', pauzaSlajder)
        .on('mouseleave', zapocniSlajder);
    zapocniSlajder();
});