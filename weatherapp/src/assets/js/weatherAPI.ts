// let apiKey = '0a63de479cdec3863df7cb1f13d35a15';

export class Weather {
  static displayCurrentWeather(data: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }) {
    return data;
  }

  static fetchWeatherByCoordinates(coords: {
    latitude: number;
    longitude: number;
  }) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=0a63de479cdec3863df7cb1f13d35a15`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        Weather.displayCurrentWeather(data.main);
      });
  }

  getWeather(cityName: string) {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=0a63de479cdec3863df7cb1f13d35a15`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const coords = {
          latitude: data[0].lat,
          longitude: data[0].lon,
        };
        Weather.fetchWeatherByCoordinates(coords);
      });
  }
}
