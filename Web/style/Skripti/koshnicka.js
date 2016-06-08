 var koshnicka = [];
 var zelbi = [];

 function kreirajKolace(name, value, expires) {
     var cookie = name + "=" + JSON.stringify(value) + ";";

     if (expires) {
         //Ako e datum
         if (expires instanceof Date) {
             //Ako ne e validen datum
             if (isNaN(expires.getTime())) expires = new Date();
         } else expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);

         cookie += "expires=" + expires.toGMTString() + ";";
     }

     document.cookie = cookie;
 }

 function vratiKolace(name) {
     var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
     result = JSON.parse(result[1]);
     console.log(result);
     return result;
 }

 //Ako postoi
 function izbrisiKolace(name) {
     document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
 }

 function vratiProduktiKolace() {
     var kolace = vratiKolace("ProduktiKosnicka");

     //var kolacinja = kolace.split(",");
     if (kolace != undefined && kolace.length > 0) {
         for (var i = 0; i < kolace.length; i++) {
             koshnicka.push(kolace[i]);
             console.log(kolace[i].Ime);
             console.log(kolace[i].Opis);
             console.log(kolace[i].Cena);
             console.log(kolace[i].Izgled);
         }
         prikaziKoshnickaOdKolace();
     }
 }

 function vratiZelbiKolace() {
     var kolace = vratiKolace("ProduktiZelbi");

     //var kolacinja = kolace.split(",");
     if (kolace != undefined && kolace.length > 0) {
         for (var i = 0; i < kolace.length; i++) {
             zelbi.push(kolace[i]);
             console.log(zelbi[i].Ime);
             console.log(zelbi[i].Opis);
             console.log(zelbi[i].Cena);
             console.log(zelbi[i].Izgled);
         }
         prikaziZelbiOdKolace();
     }
 }

 function prikaziKoshnickaOdKolace() {
     var NaracanProdukt = document.getElementById("podrediProdukti");

     var vkupna_cena = 0;
     for (var product in koshnicka) {
         var redica = NaracanProdukt.insertRow();
         var Ime = redica.insertCell(0);
         var Opis = redica.insertCell(1);
         var Cena = redica.insertCell(2);
         var Brisi = redica.insertCell(3);
         var Izgled = redica.insertCell(4);
         Cena.align = "right";

         Ime.innerHTML = koshnicka[product].Ime;
         Opis.innerHTML = koshnicka[product].Opis;
         Cena.innerHTML = koshnicka[product].Cena;
         Brisi.innerHTML = "<input class=" + "'kopce'" + "type=" + "'submit'" + "value=" + "'Бриши продукт'" + "id=" + "'Izbrisi'" + "/>";
         //alert(koshnicka[product].Ime);
         Izgled.innerHTML = "<img src='" + koshnicka[product].Izgled + "'" + "height='" + "120px'" + "width='" + "120px'" + ">";

         vkupna_cena += koshnicka[product].Cena;
     }
     document.getElementById("vkupno_cena").innerHTML = "Вкупната цена на продуктите е: " + "<div value='" + vkupna_cena + "'" + "id=" + "'krajna_cena'" + ">" + vkupna_cena + "</div>" + " денари";
 }

 function prikaziZelbiOdKolace() {
     var ZelbiProdukt = document.getElementById("podrediZelbi");

     for (var product in zelbi) {
         var redica = ZelbiProdukt.insertRow();
         var Ime = redica.insertCell(0);
         var Opis = redica.insertCell(1);
         var Cena = redica.insertCell(2);
         var Brisi = redica.insertCell(3);
         var Izgled = redica.insertCell(4);
         Cena.align = "right";
         Ime.innerHTML = zelbi[product].Ime;
         Opis.innerHTML = zelbi[product].Opis;
         Cena.innerHTML = zelbi[product].Cena;
         var btn1 = $("<input class=" + "'kopce'" + "type=" + "'submit'" + "value=" + "'Бриши продукт'" + "id=" + "'IzbrisiZelba'" + "/>");
         var btn2 = $("<input class=" + "'kopce'" + "type=" + "'submit'" + "value=" + "'Додај во кошница'" + "id=" + "'DodajKosnica'" + "/>");
         var nov_red = $("<br>");
         var nov_red1 = $("<br>");
         btn1.appendTo(Brisi);
         nov_red.appendTo(Brisi);
         nov_red1.appendTo(Brisi);
         btn2.appendTo(Brisi);
         //alert(koshnicka[product].Ime);
         Izgled.innerHTML = "<img src='" + zelbi[product].Izgled + "'" + "height='" + "120px'" + "width='" + "120px'" + ">";
     }
 }

 function prikaziZelbi() {
     var ZelbiProdukt = document.getElementById("podrediZelbi");

     if (ZelbiProdukt != null) {
         while (ZelbiProdukt.rows.length > 0) {
             ZelbiProdukt.deleteRow(0);
         }
     }

     for (var product in zelbi) {
         var redica = ZelbiProdukt.insertRow();
         var Ime = redica.insertCell(0);
         var Opis = redica.insertCell(1);
         var Cena = redica.insertCell(2);
         var Brisi = redica.insertCell(3);
         var Izgled = redica.insertCell(4);
         Cena.align = "right";

         Ime.innerHTML = zelbi[product].Ime;
         Opis.innerHTML = zelbi[product].Opis;
         Cena.innerHTML = zelbi[product].Cena;
         var btn1 = $("<input class=" + "'kopce'" + "type=" + "'submit'" + "value=" + "'Бриши продукт'" + "id=" + "'IzbrisiZelba'" + "/>");
         var btn2 = $("<input class=" + "'kopce'" + "type=" + "'submit'" + "value=" + "'Додај во кошница'" + "id=" + "'DodajKosnica'" + "/>");
         var nov_red = $("<br>");
         var nov_red1 = $("<br>");
         btn1.appendTo(Brisi);
         nov_red.appendTo(Brisi);
         nov_red1.appendTo(Brisi);
         btn2.appendTo(Brisi);
         Izgled.innerHTML = "<img src='" + zelbi[product].Izgled + "'" + "height='" + "120px'" + "width='" + "120px'" + ">";
     }
 }

 function prikaziKoshnicka() {
     var NaracanProdukt = document.getElementById("podrediProdukti");
     // Metod za brisenje na site elementi koga ke se dodade nov vo kosnickata (potrebno bidejki site povtorno ke se prikazat so ciklus)
     if (NaracanProdukt != null) {
         while (NaracanProdukt.rows.length > 0) {
             NaracanProdukt.deleteRow(0);
         }
     }

     var vkupna_cena = 0;
     for (var product in koshnicka) {
         var redica = NaracanProdukt.insertRow();
         var Ime = redica.insertCell(0);
         var Opis = redica.insertCell(1);
         var Cena = redica.insertCell(2);
         var Brisi = redica.insertCell(3);
         var Izgled = redica.insertCell(4);
         Cena.align = "right";

         Ime.innerHTML = koshnicka[product].Ime;
         Opis.innerHTML = koshnicka[product].Opis;
         Cena.innerHTML = koshnicka[product].Cena;
         Brisi.innerHTML = "<input class=" + "'kopce'" + "type=" + "'submit'" + "value=" + "'Бриши продукт'" + "id=" + "'Izbrisi'" + "/>";
         //alert(koshnicka[product].Ime);
         Izgled.innerHTML = "<img src='" + koshnicka[product].Izgled + "'" + "height='" + "120px'" + "width='" + "120px'" + ">";

         vkupna_cena += koshnicka[product].Cena;
     }
     document.getElementById("vkupno_cena").innerHTML = "Вкупната цена на продуктите е: " + "<div value='" + vkupna_cena + "'" + "id=" + "'krajna_cena'" + ">" + vkupna_cena + "</div>" + " денари";
 }
 // Funkcija za namaluvanje na vkupnata cena na produkti, se povikuva koga se brise element od kosnickata, i se brise samiot objekt od kosnickata.
 function namali_vkupno(cena_namali) {
     for (var i = 0; i < koshnicka.length; i++) {
         var obj = koshnicka[i];

         if (obj.Cena == cena_namali) {
             koshnicka.splice(i, 1);
         }
     }

     kreirajKolace("ProduktiKosnicka", koshnicka, 10);
     var minusiraj = document.getElementById("krajna_cena").getAttribute("value");
     var nova_vkupna = parseInt(minusiraj) - parseInt(cena_namali);
     var nova = parseInt(nova_vkupna);
     document.getElementById("vkupno_cena").innerHTML = "Вкупната цена на продуктите е: " + "<div value='" + nova + "'" + "id=" + "'krajna_cena'" + ">" + nova + "</div>" + " денари";
 }

 function namali_zelbi(ime) {
     for (var i = 0; i < zelbi.length; i++) {
         var obj = zelbi[i];
         if (obj.Opis == ime) {
             zelbi.splice(i, 1);
         }
     }
     kreirajKolace("ProduktiZelbi", zelbi, 10);
 }

 function brisi_produkti() {
     while (koshnicka.length > 0) {
         koshnicka.pop();
     }
     kreirajKolace("ProduktiKosnicka", koshnicka, 10);
 }

 function BrisiSiteZelbi() {
     var ZelbiProdukt = document.getElementById("DodajKosnica");

     if (ZelbiProdukt != null) {
         while (zelbi.length > 0) {
             zelbi.pop();
         }
         $("#IzbrisiZelba").parent().parent().parent().remove();
         kreirajKolace("ProduktiZelbi", zelbi, 10);
     } else {
         swal("Немате никакви желби!");
     }
 }

 function DodajKoshnicaOdZelbi(ime) {
     for (var i = 0; i < zelbi.length; i++) {
         var obj = zelbi[i];
         if (obj.Opis == ime) {
             koshnicka.push(obj);
             prikaziKoshnicka();
             zelbi.splice(i, 1);
         }
     }
     kreirajKolace("ProduktiZelbi", zelbi, 10);
     kreirajKolace("ProduktiKosnicka", koshnicka, 10);
 }


 function DodajVoKoshnicka(ime, opis, cena, izgled) {
     //Iskoristuvam gotova biblioteka za alert windows, bazicnite JS alerti ne izgledaat estetski ubavo.
     swal("Успешна нарачка!");

     var produkt = {};
     produkt.Ime = ime;
     produkt.Opis = opis;
     produkt.Cena = cena;
     produkt.Izgled = izgled;
     koshnicka.push(produkt);
     kreirajKolace("ProduktiKosnicka", koshnicka, 10);
     prikaziKoshnicka();
 }

 function DodajVoZelbi(ime, opis, cena, izgled) {
     //Iskoristuvam gotova biblioteka za alert windows, bazicnite JS alerti ne izgledaat estetski ubavo
     swal("Додадено во желби!");

     var produkt = {};
     produkt.Ime = ime;
     produkt.Opis = opis;
     produkt.Cena = cena;
     produkt.Izgled = izgled;
     zelbi.push(produkt);
     kreirajKolace("ProduktiZelbi", zelbi, 10);
     prikaziZelbi();

 }