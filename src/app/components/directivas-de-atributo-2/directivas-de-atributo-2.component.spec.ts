import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasDeAtributo2Component } from './directivas-de-atributo-2.component';

describe('DirectivasDeAtributo2Component', () => {
  let component: DirectivasDeAtributo2Component;
  let fixture: ComponentFixture<DirectivasDeAtributo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivasDeAtributo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivasDeAtributo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
