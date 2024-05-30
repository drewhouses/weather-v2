let cityName = "McAllen";

function test() {
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=0a63de479cdec3863df7cb1f13d35a15`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const coords = {
        lat: data[0].lat,
        lon: data[0].lon,
      };
      fetchWeather(coords);
    });
}

function fetchWeather(coords) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=imperial&appid=0a63de479cdec3863df7cb1f13d35a15`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      const weatherData = data.main;
      console.log(weatherData);
      // displayCurrentWeather(data);
    });
}

test();
