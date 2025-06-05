import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  name = 'Angular';
  age = 5;
  getName(){
    return this.name;
  }
  getGreeting() {
    return `Hello, ${this.name}! You are ${this.age} years old.`;
  }
}
