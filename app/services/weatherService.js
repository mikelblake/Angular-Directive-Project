var app = angular.module('directivePractice');

app.service('weatherService', function($http, $q){
	this.getWeather = function(city){
		var dfd = $q.defer();
		$http.get('http://api.openweathermap.org/data/2.5/weather?q='+city + '&units=imperial')
		.then(function(data){
			dfd.resolve({
				temperature: data.data.main.temp,
				weather: data.data.weather[0].description
			})
		});
		return dfd.promise;
	}
})