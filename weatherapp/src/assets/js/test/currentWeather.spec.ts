import { CurrentWeather } from '../weatherAPI';

describe('CurrentWeather', () => {
  describe('', () => {
    it('should construct a currentWeather object with correct types', () => {
      const currentWeather = new CurrentWeather('McAllen', 70, 30, 80, 60);

      expect(currentWeather.city).toEqual('McAllen');
      expect(currentWeather.currentTemp).toEqual(70);
      expect(currentWeather.humidity).toEqual(30);
      expect(currentWeather.high).toEqual(80);
      expect(currentWeather.low).toEqual(60);
    });
  });
});
