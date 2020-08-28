$(document).ready(function () {
    $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
	  var response = data.response;
	  console.log(response);
	  var source = $('#template').html();
	  var template = Handlebars.compile(source);
	  for (var i=0; i< response.length; i++){
		 var clone = template(response[i]);
		 $('.cds-container').append(clone);
	  }
	},
    error: function () {
      alert("errore impossibile caricare");
    },
  });
  
});
