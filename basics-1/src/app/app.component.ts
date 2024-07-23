import { Component } from '@angular/core';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BedsComponent } from './components/beds/beds.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoomsComponent, BedsComponent],
  template: `
    <p class="text">Hello world</p>
    <app-rooms></app-rooms>
    <app-beds></app-beds>
  `,
  styles: [
    `
      .text {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  title = 'basics-1';
}
