import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weather } from '../../../assets/js/weatherAPI';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() city!: string;
  @Output() passWeatherData = new EventEmitter<string>();

  async fetchWeather() {
    const weather = new Weather();
    let data = await weather.getWeather(this.city);
    this.passWeatherData.emit(data);
  }

  ngOnInit(): void {}
}
