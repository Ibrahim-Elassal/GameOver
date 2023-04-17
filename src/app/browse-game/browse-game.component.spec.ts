import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseGameComponent } from './browse-game.component';

describe('BrowseGameComponent', () => {
  let component: BrowseGameComponent;
  let fixture: ComponentFixture<BrowseGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
