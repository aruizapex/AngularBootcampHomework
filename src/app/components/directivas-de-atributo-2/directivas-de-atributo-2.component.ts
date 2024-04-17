import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-de-atributo-2',
  templateUrl: './directivas-de-atributo-2.component.html',
  styleUrl: './directivas-de-atributo-2.component.scss'
})
export class DirectivasDeAtributo2Component {
  protected active: boolean = false;

  toggle(){
    this.active = !this.active;
  }
}
