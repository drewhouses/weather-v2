import { Component, Output, EventEmitter } from '@angular/core';
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

  // @Output() passCityName = new EventEmitter<string>();

  async fetchWeather() {
    const weather = new Weather();
    let data = await weather.getWeather(this.inputValue);
    console.log(data);
    // this.passCityName.emit();
  }
}
