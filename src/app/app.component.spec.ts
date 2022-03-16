import { TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should add square when addSquare() is called', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance;
    const numberOfSquares = app.numberOfSquares;
    app.addSquare()
    expect(app.numberOfSquares).toBe(numberOfSquares + 1);
  })

  it('should call addSquare() when the add-box is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance;
    spyOn(app, 'addSquare');

    const addSquare = fixture.debugElement.nativeElement.querySelector('div.box-add')
    addSquare.click();

    expect(app.addSquare).toHaveBeenCalled();
  })

});
