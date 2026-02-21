import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSong } from './manage-song';

describe('ManageSong', () => {
  let component: ManageSong;
  let fixture: ComponentFixture<ManageSong>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSong]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSong);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
