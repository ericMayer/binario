import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoBinarioComponent } from './calculo-binario.component';

describe('CalculoBinarioComponent', () => {
  let component: CalculoBinarioComponent;
  let fixture: ComponentFixture<CalculoBinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoBinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoBinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
