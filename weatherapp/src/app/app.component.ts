import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentWeather } from './components/current-weather.component';
import { PageHeader } from './components/header.component';
import { ForecastWeather } from './components/forecast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrentWeather, PageHeader, ForecastWeather],
  template: `
    <page-header></page-header>
    <current-weather></current-weather>
    <forecast-weather></forecast-weather>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weatherapp';
}
