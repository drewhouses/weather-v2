import { Weather } from '../weatherAPI';
import { CurrentWeather } from '../weatherAPI';

describe('Weather', () => {
  describe('fetchCityCoordinates', () => {
    it('should take in a city name and return latitute and longitute coordinates', () => {
      const city = 'McAllen';
      const expectedLatitute = 26.204114;
      const expectedLongitude = -98.2300605;
      const weather = new Weather();

      const coords = weather.fetchCityCoordinates('McAllen');

      expect(coords.latitude).toEqual(expectedLatitute);
      expect(coords.longitude).toEqual(expectedLongitude);
    });
  });
});

// describe('Weather', () => {
//   describe('fetchWeatherByCoordinates', () => {
//     it('should take in latitude and longitude and return weather information', () => {
//       //
//     });
//   });
// });
