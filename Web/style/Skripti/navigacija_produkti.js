 $(document).ready(function () {
     $('#galerija').after('<div class="stranici" id="nav"></div>');
     var pokazi_redovi = 2;
     var vkupno_redovi = $('#galerija tbody tr').length;
     var br_strani = vkupno_redovi / pokazi_redovi;
     for (i = 0; i < br_strani; i++) {
         var brStr = i + 1;
         $('#nav').append('<a class="strana" " rel="' + i + '">' + brStr + '</a> ');
     }

     $('#galerija tbody tr').hide();
     $('#galerija tbody tr').slice(0, pokazi_redovi).show();
     $('#nav a:first').addClass('aktiven');

     $('#nav a').bind('click', function () {

         $('#nav a').removeClass('aktiven');
         $(this).addClass('aktiven');
         var segasna = $(this).attr('rel');
         var poceten = segasna * pokazi_redovi;
         var kraen = poceten + pokazi_redovi;
         $('#galerija tbody tr').css('opacity', '0.5').hide().slice(poceten, kraen).
         toggle("slide", {
             direction: 'right'
         }, 800).
         css('display', 'table').animate({
             opacity: 0.2
         }, 200).
         css('display', 'table').animate({
             opacity: 1
         }, 300);
     });
 });