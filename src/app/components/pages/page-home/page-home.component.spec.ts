import { PageHomeComponent } from './page-home.component';
import { byTestId, createComponentFactory, Spectator } from '@ngneat/spectator';
import { StarWarsFilmService } from '../../../services/star-wars-film/star-wars-film.service';
import { of } from 'rxjs';
import { IStarWarsFilm } from '../../../models/i-star-wars-film';

describe('PageHomeComponent', () => {
  const createComponent = createComponentFactory(PageHomeComponent);

  const setup = (loadingResult = false, films: IStarWarsFilm[] = []) => createComponent({
    providers: [
      {
        provide: StarWarsFilmService,
        useValue: {
          entities$: of(films),
          loading$: of(loadingResult),
          getAll: jasmine.createSpy(),
        },
      },
    ],
  });

  it('should render', () => {
    const spectator = setup();
    expect(spectator.query(byTestId('p-home'))).toBeTruthy();
  });

  describe('loading', () => {
    it('should print loading while loading', () => {
      const spectator = setup(true);
      expect(spectator.query(byTestId('p-home__loading'))).toBeTruthy();
    });

    it('should not print loading when false', () => {
      const spectator = setup(false);
      expect(spectator.query(byTestId('p-home__loading'))).toBeFalsy();
    });
  });

  it('should populate films from the film service', () => {
    const films: IStarWarsFilm[] = [
      {
        title: 'My Title',
      }
    ];

    const spectator = setup(false, films);
    const text = spectator.query(byTestId('p-home__film')).textContent.trim();

    expect(text).toEqual(films[0].title);
  });
});
