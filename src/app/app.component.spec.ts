import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const createComponent = createComponentFactory(AppComponent);
  let spectator: Spectator<AppComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.query(byTestId('app'))).toBeTruthy();
  });

  it(`should render the router'`, () => {
    expect(spectator.query(byTestId('router'))).toBeTruthy();
  });
});
