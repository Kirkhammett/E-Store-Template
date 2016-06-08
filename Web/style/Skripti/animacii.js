jQuery(window).load(function () {

    var visocina, gorna_poz, dolna_poz = 0;

    function kalkuliraj_skrol() {
        visocina = jQuery(window).height();
        gorna_poz = jQuery(window).scrollTop();
        dolna_poz = visocina + gorna_poz;
    }

    jQuery.fn.prikazi_anim = function (nasoka, brzina) {
        return this.each(function () {

            var objektOffset = jQuery(this).offset();
            var objektOffsetGore = objektOffset.top;

            if (!jQuery(this).hasClass("skrieno")) {

                if (nasoka == "desno") {
                    jQuery(this).css({
                        "opacity": 0,
                            "right": "1700px",
                            "position": "relative"
                    });

                } else {
                    jQuery(this).css({
                        "opacity": 0,
                            "right": "-1700px",
                            "position": "relative"
                    });
                }
                jQuery(this).addClass("skrieno");
            }

            if (!jQuery(this).hasClass("kraj-anim")) {

                if (dolna_poz > objektOffsetGore) {
                    jQuery(this).animate({
                        "opacity": 1,
                            "right": 0
                    }, brzina).addClass("kraj-anim");
                }
            }
        });
    }

    function komandi() {

        jQuery("td li:even").prikazi_anim("levo", 800);
        jQuery("td li:odd").prikazi_anim("desno", 1200);
    }

    kalkuliraj_skrol();
    komandi();

    jQuery(window).scroll(function () {
        kalkuliraj_skrol()
        komandi();
    });
});