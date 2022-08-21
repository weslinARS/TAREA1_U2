import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TAREA1_U2';
  num1: number | any;
  num2: number | any;
  res: number | any;
  constructor() {}
  ngOnInit(): void {}
  suma(): void {
    this.res = this.num1 + this.num2;
  }
  resta() {
    this.res = this.num1 - this.num2;
  }
  mult() {
    this.res = this.num1 * this.num2; 
  }
  division() {
    this.res = this.num1 / this.num2; 
  }
}
