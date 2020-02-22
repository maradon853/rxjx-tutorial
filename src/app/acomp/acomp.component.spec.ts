import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AcompComponent } from './acomp.component';

describe('AcompComponent', () => {
  let component: AcompComponent;
  let fixture: ComponentFixture<AcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('background should have correct color', () => {
    component.color = '#87CEEB';
    fixture.detectChanges();
    const colorEl: HTMLElement = fixture.debugElement.query(By.css('.colored-div')).nativeElement;
    expect(colorEl.style.backgroundColor).toBe('#87CEEB');
});

  
});
