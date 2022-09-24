// The user will need to be able to search for a city
// This will return a result of the current and future weather condition
// The search will produce the name of the city, the date, temperature, wind speed and humidity
// The application logs the users search history and allows them to click the previously searched cities to view them

function getApi() {
var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=94.04&exclude=hourly,daily&appid=b822598e32f666bae94083d5722b3cb8';

}

fetch (requestUrl)
.then (function(response){
return response.json();
})

getApi()
