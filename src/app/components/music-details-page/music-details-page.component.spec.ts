import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicDetailsPageComponent} from './music-details-page.component';

describe('MusicDetailsPageComponent', () => {
  let component: MusicDetailsPageComponent;
  let fixture: ComponentFixture<MusicDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicDetailsPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MusicDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
