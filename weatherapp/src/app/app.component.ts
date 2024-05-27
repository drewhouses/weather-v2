import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentWeather } from './components/current-weather.component';
import { PageHeader } from './components/header.component';
import { ForecastWeather } from './components/forecast.component';
import { SearchBar } from './components/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrentWeather, PageHeader, ForecastWeather, SearchBar],
  template: `
    <page-header></page-header>
    <search-bar></search-bar>  
    <current-weather></current-weather>
    <forecast-weather></forecast-weather>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Weather App';
}
