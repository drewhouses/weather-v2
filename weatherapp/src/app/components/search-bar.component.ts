import { Component } from '@angular/core';

@Component({
  selector: 'search-bar',
  standalone: true,
  template: `
      <label class="label">Find Weather for any city</label>
      <div class="container column is-one-third">
        <input class="input is-primary is-medium is-rounded is-one-third" type="text">
        <button class="button is-link mt-2">Search</button>
      </div>
  `,
  styleUrl: '../app.component.css'
})
export class SearchBar {
  //props
};