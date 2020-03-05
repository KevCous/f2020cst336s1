// Get the search button which is the only one, that is why we can search the tag
document.querySelector('#button').addEventListener('click', sendRequest, false);
// We add a key up listener to our search bar to send request when we press
// enter key
document.querySelector('#search').addEventListener('keyup', searchRequest, false);

// This function send a request when we press the enter key
function searchRequest(event) {
	// enter key code is 13
	if (event.keyCode === 13) 
		sendRequest();
}

// This function send a request to the unsplash api with the user input
function sendRequest() {
	$.ajax({
		url: 'https://api.unsplash.com/search/photos',
		dataType: 'json',
		data: {
			query: $('input').val(), // The user input
			client_id: '9OeUVL85etDIOMC6BHMxlpmyRVOHsDNbV6QAnv4aYmY'
		},
		success: function(result, state) {
			// Reset the value of the content div if there 
			// was a search before, initialize it if not
			$('p').text('Result of ' + $('input').val());
			$('#content0').html('');
			$('#content1').html('');

			var i = 0;
			// A loop for each result
			result.results.forEach(function(r) {
				// Dispatch the results into 2 columns 
				$(`#content${i % 2}`).append(
					'<div class="card mb-2">' +
						'<img src="' +
						r.urls.full +
						'" class="card-img-top">' +
						'<div class="card-body">' +
						'<h5 class="card-title">' +
					// if there is no title to the image put the user input instead
						(r.description == null ? $('input').val() : r.description) +
						'</h5>' +
						'<p class="card-text">' +
					// The description of the image
						r.alt_description
				);
				i++;
			});
		}
	});
}
