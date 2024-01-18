import { ElementSize, FlareButtonDirective } from '@ng-flare/components';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'mock-component',
  standalone: true,
  imports: [FlareButtonDirective],
  template: `<button f-button [circular]="circular" [size]="size"></button>`,
})
class MockComponent {
  circular = false;
  size: ElementSize | undefined;
}
describe('FlareButtonDirective', () => {
  const directive = new FlareButtonDirective();
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});

describe('FlareButtonBaseDirective', () => {
  let component: MockComponent;
  let fixture: ComponentFixture<MockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockComponent, FlareButtonDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(MockComponent);
    component = fixture.componentInstance;
  });

  it('should add circular class to host when circular checked', () => {
    component.circular = true;
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('.f-button-circular'));
    expect(debugElement).toBeTruthy();
  });

  it('should set size class of button small', () => {
    component.size = 'small';
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('.f-button-small'));
    expect(debugElement).toBeTruthy();
  });

  it('should set size class of button large', () => {
    component.size = 'large';
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('.f-button-large'));
    expect(debugElement).toBeTruthy();
  });

  it('should not set size class of button', () => {
    component.size = undefined;
    fixture.detectChanges();
    const debugLargeElement = fixture.debugElement.query(By.css('.f-button-large'));
    const debugSmallElement = fixture.debugElement.query(By.css('.f-button-small'));
    expect(debugLargeElement).toBeFalsy();
    expect(debugSmallElement).toBeFalsy();
  });

  it('should not set circular class of button', () => {
    component.circular = false;
    fixture.detectChanges();
    const debugCircularElement = fixture.debugElement.query(By.css('.f-button-circular'));
    expect(debugCircularElement).toBeFalsy();
  });
});
