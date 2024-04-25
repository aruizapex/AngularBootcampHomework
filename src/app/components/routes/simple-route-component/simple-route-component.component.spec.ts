import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRouteComponentComponent } from './simple-route-component.component';

describe('SimpleRouteComponentComponent', () => {
  let component: SimpleRouteComponentComponent;
  let fixture: ComponentFixture<SimpleRouteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleRouteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleRouteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
