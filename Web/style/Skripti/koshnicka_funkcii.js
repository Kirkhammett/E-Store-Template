 // Brisi eden specificen produkt od koshnickata i potoa povikuva funkcija za da se namali vkupnata cena.
 $(document).on('click', '#Izbrisi', function () {
     var cena = $(this).parent().parent().find("td").eq(2).html();
     $(this).parent().parent().remove();
     console.log("Вкупната цена се намалува за " + cena);
     namali_vkupno(cena);
 });
 // Brisi eden specificen produkt od zelbi
 $(document).on('click', '#IzbrisiZelba', function () {
     var ime = $(this).parent().parent().find("td").eq(1).html();
     $(this).parent().parent().remove();
     console.log("Се брише од желби " + ime);
     namali_zelbi(ime);
 });
 //Se dodava produkt od zelbi vo kosnica
 $(document).on('click', '#DodajKosnica', function () {
     var ime = $(this).parent().parent().find("td").eq(1).html();
     $(this).parent().parent().remove();
     console.log("Се преместува од желби во кошничка продукотот: " + ime);
     DodajKoshnicaOdZelbi(ime);
 });

 // Globalna funkcija za naracka na produkti od bilo koja od stranite, pravi Checkout na proizvodite i potoa gi brise od koshnickata
 function Naracaj() {
     var checkout_cena = document.getElementById("krajna_cena").getAttribute("value");
     if (checkout_cena == 0) swal("Немате избрано никакви продукти!");
     else {
         swal("Вашите продукти со тотална цена од " + checkout_cena + " денари се успешно нарачани!");
         $("#Izbrisi").parent().parent().parent().remove();
         brisi_produkti();
         document.getElementById("vkupno_cena").innerHTML = "Вкупната цена на продуктите е: " + "<div value='" + 0 + "'" + "id=" + "'krajna_cena'" + ">" + 0 + "</div>" + " денари";
     }
 }
 // Ova nema da raboti vo Chrome bidejki moze .load() da se povika samo na  http:// or https:// protokoli, file:// ne raboti.
 // No vo Mozilla si raboti odlicno.
 $(document).ready(function () {
     $("#skrieno").load("koshnicka.html");
 });

 $(document).ready(function () {
     $("#skrieno2").load("zelbi.html");
 });