var Apis = {};
Apis = {
	fetchAPI: function(){
		return $.ajax({
			type: 'GET',
			// url: 'http://localhost:8000/api/v1/'
			url: 'http://localhost:8000/api/v1/sample.json'
		});
		// other task …
	}
};