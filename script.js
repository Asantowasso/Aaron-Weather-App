// The user will need to be able to search for a city
// This will return a result of the current and future weather condition
// The search will produce the name of the city, the date, temperature, wind speed and humidity
// The application logs the users search history and allows them to click the previously searched cities to view them

fetch('https://api.openweathermap.org/data/3.0/onecall?lat=32.0&lon=31.0&exclude={part}&appid=[3f47a5127ecff2b8f4c226b487bf833a]')
.then (response => {
return response.json();   
})

