// The user will need to be able to search for a city
// This will return a result of the current and future weather condition
// The search will produce the name of the city, the date, temperature, wind speed and humidity
// The application logs the users search history and allows them to click the previously searched cities to view them

var city = "austin";
var apiKey = "3f47a5127ecff2b8f4c226b487bf833a";

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    ",US&appid=" +
    apiKey
)
  .then((response) => {
    console.log("funciton running");
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    //const boxes = document.querySelector(".box").innerHTML = "Text";
   // console.log(boxes);

    // extract the lat and lon
    var long = data.coord.lon;
    var lat = data.coord.lat;
    var temp = data.main.temp;
    document.querySelector(".box1").innerHTML = temp;
    var humidity = data.main.humidity;
    document.querySelector(".box2").innerHTML= humidity;
    var wind = data.wind.speed;
    document.querySelector(".box3").innerHTML= wind;
    
    // -97.7431 30.2672
    // sanity check
    console.log(long, lat);
    console.log (wind);
    console.log(temp);
    console.log(humidity);
    // insert the lat and lon into the url to make the next call (contcatenation)
    var oneCallUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&exclude=hourly&appid=3f47a5127ecff2b8f4c226b487bf833a";
    // make ANOTHER fetch using that new url
    fetch(oneCallUrl)
      // then resonse.json
      .then(function (response) {
        return response.json();
      })
      .then(function (data2) {
        // -- then
        // log you data
        console.log("this should be all the data below");
        console.log(data2);
        // extract you data fromt he object
        // ** put the data on the screen**
        /* 
        method 1: manipulate static html
            -put static html on the screen w/ html to your linking
            -reach into the html and grab the elements you want to put your conent in (queryselector)
            -use dot notation to insert your data into the html object

        method 2: create your html using js
            - use the create element function to create html el
            - manipulate the element to have the attr and values you want
            - append thos element somewhere on the screen
        */
      });
  });
