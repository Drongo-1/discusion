import { Component } from '@angular/core';
import { Discussion } from './discussion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'disscusion';
  discussion: Discussion[] = [
    new Discussion(1, "Java Quiz"),
    new Discussion(2, "Python Quiz"),
    new Discussion(3, "Javascript Quiz")

  ]
}
