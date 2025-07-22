import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
 cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
 selectedCity: string = '';
}
