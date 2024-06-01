import { Component, Output, EventEmitter } from '@angular/core';
import { Weather } from '../../../assets/js/weatherAPI';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  inputValue: string = '';

  onWeatherDataPassed(weatherData: any) {
    console.log(weatherData);
  }
}
