import { Component } from '@angular/core';
import { Weather } from '../../assets/js/weatherAPI';



@Component({
  selector: 'current-weather',
  standalone: true,
  template: `
    <p>This my current weather component</p>
    <p></p>
  `,
  styleUrl: '../app.component.css',
})
export class CurrentWeather {
  //props
}
