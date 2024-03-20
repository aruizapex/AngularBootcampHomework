import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-de-atributo',
  templateUrl: './directivas-de-atributo.component.html',
  styleUrl: './directivas-de-atributo.component.scss'
})
export class DirectivasDeAtributoComponent {
  protected active: boolean = false;

  toggle(){
    this.active = !this.active;
  }
}
