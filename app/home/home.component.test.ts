import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {HomeComponent} from './home.component';

let component: HomeComponent;
let fixture: ComponentFixture<HomeComponent>;
let element: HTMLElement;

describe('HomeComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HomeComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  describe('increment', () => {
    it('increments and updates count in template', () => {
      expect(component.count).toBe(0);
      component.increment();
      fixture.detectChanges();
      element = fixture.debugElement.query(By.css('.counter')).nativeElement;
      expect(component.count).toBe(1);
      expect(element.textContent).toBe('1');
    });
  });
});
