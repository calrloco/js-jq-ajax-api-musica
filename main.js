$(document).ready(function () {
    $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
	  var response = data.response;
	  var source = $('.template').html();
	  var html = teplate()
	  for (var i=0;i<response.length;i++){
         $('.container-cd').append('ciao');
	  }
	},
    error: function () {
      alert("errore impossibile caricare");
    },
  });
  
});
