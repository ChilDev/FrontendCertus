import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminardatosComponent } from './eliminardatos.component';

describe('EliminardatosComponent', () => {
  let component: EliminardatosComponent;
  let fixture: ComponentFixture<EliminardatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminardatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminardatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
