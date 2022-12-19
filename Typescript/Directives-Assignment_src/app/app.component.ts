import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives-Assignment';
  isDataVisible:boolean=false;
  arrayCounter:number[]=[];
  count:number=1;

  ShowAndHide() {
    this.isDataVisible = !this.isDataVisible;
    this.arrayCounter.push(this.count++);
  }  

  getColor(i: number): string {
    if (i >= 5) {
      return 'blue';
    } else {
      return 'white';
    }
  }

}
