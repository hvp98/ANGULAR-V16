import { Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
  preserveWhitespaces: true
})
export class EventBindingComponent {
  name = '';
  result = '';
  inputValue: string = '';
  selectionValue = '';
  isChecked: boolean = false;

  onclick() {
    this.name = 'Angular v16';
  }

  onDoubleClick() {
    this.name = 'Double Clicked!';
  }

  clearName() {
    this.name = '';
  }

  onInput(e: InputEvent) {
    const value = e.target as HTMLInputElement;
    this.inputValue = value.value;
  }

  onChange = (e: MatSelectChange) => {
    this.selectionValue = e.value;
  }

  onCheckboxChange = (e: MatCheckboxChange) => {
    console.log(e); // Assuming e.value is a boolean for checkbox
    this.isChecked = e.checked;
  }

  onRadioChange = (e: MatRadioChange) => {
    console.log(e); // Assuming e.value is the selected radio button value
    this.result = e.value;
  }

}
