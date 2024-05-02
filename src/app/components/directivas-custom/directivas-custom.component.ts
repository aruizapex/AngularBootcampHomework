import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-custom',
  templateUrl: './directivas-custom.component.html',
  styleUrl: './directivas-custom.component.scss'
})
export class DirectivasCustomComponent {
  protected defaultText: string = 'lorem ipsum dolor';
}
