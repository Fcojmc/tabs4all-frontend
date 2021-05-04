import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavBandsComponent } from './fav-bands.component';

describe('FavBandsComponent', () => {
  let component: FavBandsComponent;
  let fixture: ComponentFixture<FavBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavBandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
