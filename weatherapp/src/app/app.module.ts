import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ButtonComponent } from './components/button/button.component';
import { HistoryComponent } from './components/history/history.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    ForecastComponent,
    CurrentWeatherComponent,
    ButtonComponent,
    HistoryComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
