import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta11Component } from './pregunta11.component';

describe('Pregunta11Component', () => {
  let component: Pregunta11Component;
  let fixture: ComponentFixture<Pregunta11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
