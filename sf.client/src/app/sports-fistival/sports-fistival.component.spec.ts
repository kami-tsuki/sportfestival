import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsFistivalComponent } from './sports-fistival.component';

describe('SportsFistivalComponent', () => {
  let component: SportsFistivalComponent;
  let fixture: ComponentFixture<SportsFistivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsFistivalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsFistivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
