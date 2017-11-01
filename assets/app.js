

$(document).ready(function(){ 

var x = ["Bye Felicia", "Hey Boo", "Boy Bye", "Slay", "Turnt Up", "Squad Goals"]

		$("#button").on("click", function(){
			var x = $(this).data("search");

			
			
// giphy formula may be wrong
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +x+ "&api_key=WFOiWQNWjlbOLY5EobWgG1baVkffQG07&limit10";
console.log(queryURL);

		$.ajax({url: queryURL, 
			method:"GET"})
		.done(function(response){
			console.log(response);

			for(var i=0; i<response.data.length; i++){

				$("#gifArea").prepend("<p>Rating: " +response.data[i].rating+ "</p>");
				$("#gifArea").prepend("<img src=" +response.data[i].images.downsized.url+ ">");


			}

			})
		})
})

