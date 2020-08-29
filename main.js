$(document).ready(function () {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
      var response = data.response;
      var source = $("#template").html();
      var template = Handlebars.compile(source);
      for (var i = 0; i < response.length; i++) {
        var clone = template(response[i]);
        $(".cds-container").append(clone);
      }
    },
    error: function () {
      alert("errore impossibile caricare");
    },
  });
  /*BONUS*/
  // funzione al click del value del select per trovare generi
  $(".select").click(function () {
    var cd = $(".cd");
    var genre = $(this).val();
    if (genre == "0") {
      cd.show(200);
    } else if (genre == "1") {
      searchForClass(cd, "Rock");
    } else if (genre == "2") {
      searchForClass(cd, "Pop");
    } else if (genre == "3") {
      searchForClass(cd, "Metal");
    } else if (genre == "4") {
      searchForClass(cd, "Jazz");
    }
  });
  // funzione per capire se un elemento ha una classe o meno e nasconderlo
  function searchForClass(cd, clss) {
    cd.each(function () {
      if ($(this).hasClass(clss) == false) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  }
});
