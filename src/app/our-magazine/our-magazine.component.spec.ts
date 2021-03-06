import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMagazineComponent } from './our-magazine.component';

describe('OurMagazineComponent', () => {
  let component: OurMagazineComponent;
  let fixture: ComponentFixture<OurMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurMagazineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
