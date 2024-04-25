import { Component } from '@angular/core';
import { RootInjectableService } from '@services/root-injectable.service';

@Component({
  selector: 'app-injectable-root-service',
  templateUrl: './injectable-root-service.component.html',
  styleUrl: './injectable-root-service.component.scss'
})
export class InjectableRootServiceComponent {
  constructor(
    protected rootInjectableService: RootInjectableService
  ){}
}
