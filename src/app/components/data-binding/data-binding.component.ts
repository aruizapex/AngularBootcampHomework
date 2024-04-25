import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  dataBindingText: string = "Hello World";

  handleTriggerButton(){
    alert('I was triggered by an event')
  }
}
