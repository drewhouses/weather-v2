let apiKey = '0a63de479cdec3863df7cb1f13d35a15';

class CurrentWeather {
  city: string;
  currentTemp: number;
  humidity: number;
  high: number;
  low: number;

  constructor(
    city: string,
    currentTemp: number,
    humidity: number,
    high: number,
    low: number
  ) {
    this.city = city;
    this.currentTemp = currentTemp;
    this.humidity = humidity;
    this.high = high;
    this.low = low;
  }
}

class Weather {
  current: CurrentWeather;
  // forecast: ForecastWeather;

  constructor(current: CurrentWeather) {
    this.current = current;
    // this.forecast = forecast;
  }

  fetchWeatherByCoordinates(lat: number, lon: number) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        // displayCurrentWeather(data);
      });
  }
}
