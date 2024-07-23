import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template: `<p class="text">Hello world</p>`,
  // styleUrl: './app.component.css',
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
