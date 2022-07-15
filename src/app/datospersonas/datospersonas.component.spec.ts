import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospersonasComponent } from './datospersonas.component';

describe('DatospersonasComponent', () => {
  let component: DatospersonasComponent;
  let fixture: ComponentFixture<DatospersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatospersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatospersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
