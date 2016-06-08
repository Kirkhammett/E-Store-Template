 $(document).ready(function () {
     $("#test_baranje").keyup(function () {
         var redovi = $("#galerija").find("tr");
         var koloni = $("#galerija").find("td").hide();
         var data = $(this).val().toLowerCase().split(" ");
         if (this.value == "") {
             koloni.show();
             $('#galerija tbody tr').hide();
             $('#galerija tbody tr').slice(0, 2).show();
             $('#nav a').removeClass('aktiven');
             $('#nav a:first').addClass('aktiven');
             return;
         }
         $.each(data, function (i, v) {
             koloni.filter(":contains('" + v + "')").show().fadein();
         });
     });
 });