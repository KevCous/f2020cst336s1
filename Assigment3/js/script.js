document.querySelector('#button').addEventListener('click', sendRequest, false);
document.querySelector('#search').addEventListener('keyup', searchRequest, false);

function searchRequest(event) {
	if (event.keyCode === 13) sendRequest();
}

function sendRequest() {
	$.ajax({
		url: 'https://api.unsplash.com/search/photos',
		dataType: 'json',
		data: {
			query: $('input').val(),
			client_id: '9OeUVL85etDIOMC6BHMxlpmyRVOHsDNbV6QAnv4aYmY'
		},
		success: function(result, state) {
			$('p').text('Result of ' + $('input').val());
			$('#content0').html('');
			$('#content1').html('');

			var i = 0;
			result.results.forEach(function(r) {
				$(`#content${i % 2}`).append(
					'<div class="card mb-2">' +
						'<img src="' +
						r.urls.full +
						'" class="card-img-top">' +
						'<div class="card-body">' +
						'<h5 class="card-title">' +
						(r.description == null ? $('input').val() : r.description) +
						'</h5>' +
						'<p class="card-text">' +
						r.alt_description
				);
				i++;
			});
		}
	});
}
