import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Weather } from '../../assets/js/weatherAPI';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [FormsModule],
  template: `
    <label class="label">Find Weather for any city</label>
    <div class="container column is-one-third">
      <input
        class="input is-primary is-medium is-rounded is-one-third search-text"
        type="text"
        [(ngModel)]="inputValue"
      />
      <button class="button is-link mt-2" (click)="fetchWeather()">
        Search
      </button>
    </div>
  `,
  styleUrl: '../app.component.css',
})
export class SearchBar {
  inputValue: string = '';

  fetchWeather() {
    console.log(this.inputValue);
    const weather = new Weather();
    weather.getWeather(this.inputValue);
  }
}
