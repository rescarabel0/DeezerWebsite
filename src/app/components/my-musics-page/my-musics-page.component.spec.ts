import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MyMusicsPageComponent} from './my-musics-page.component';

describe('MyMusicsPageComponent', () => {
  let component: MyMusicsPageComponent;
  let fixture: ComponentFixture<MyMusicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMusicsPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyMusicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
