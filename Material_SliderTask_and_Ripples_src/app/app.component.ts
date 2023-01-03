import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sliderTask';

  disabled = false;

  max = 100;
  min = 10;
  showTicks = false;
  step = 3;
  thumbLabel = true;
  value = 10;

  centered = false;
  unbounded = false;

  radius: number=150;
  color: string="darkblue";
}
