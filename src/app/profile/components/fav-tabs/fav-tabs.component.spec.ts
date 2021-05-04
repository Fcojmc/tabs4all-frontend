import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavTabsComponent } from './fav-tabs.component';

describe('FavTabsComponent', () => {
  let component: FavTabsComponent;
  let fixture: ComponentFixture<FavTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
