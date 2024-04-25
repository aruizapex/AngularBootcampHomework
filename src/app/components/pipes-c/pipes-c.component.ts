import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-c',
  templateUrl: './pipes-c.component.html',
  styleUrl: './pipes-c.component.scss'
})
export class PipesCComponent {
  protected number: number = 34.22;
  protected hello: string = 'hello world'
}
