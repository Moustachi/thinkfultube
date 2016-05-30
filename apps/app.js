$(function(){ //short-hand for document ready
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm){
	var params = {
		part: 'snippet'
		key: 'AIzaSyArsfo8Zq1UoRGMAJSJCFwYqe9PXA5Aabw'
		q: 

	};
	url = 'https://www.googleapis.com/youtube/v3/search';
	
	$.getJSON(url, params, function(data){
		showResults(data.Search);
	});
}

function showResults(results){
	var html="";
	$.each(results, function(index,value){
		html += '<p>' + value.Title + '</p>'
		console.log(value.Title);
	});
	$('#search-results').html(html);
}