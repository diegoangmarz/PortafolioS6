import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilityCardComponent } from './hability-card.component';

describe('HabilityCardComponent', () => {
  let component: HabilityCardComponent;
  let fixture: ComponentFixture<HabilityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilityCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabilityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
