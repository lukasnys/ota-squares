import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberOfSquares: number = 0;

  addSquare() {
    this.numberOfSquares++;
  }
}
