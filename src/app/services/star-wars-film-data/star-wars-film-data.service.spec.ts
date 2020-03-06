import { createHttpFactory, SpectatorHttp } from '@ngneat/spectator';
import { StarWarsFilmDataService } from './star-wars-film-data.service';
import { DefaultDataServiceConfig, DefaultHttpUrlGenerator, HttpUrlGenerator, Logger } from '@ngrx/data';
import { IStarWarsFilm } from '../../models/i-star-wars-film';

/**
 * @link https://github.com/johnpapa/angular-ngrx-data/blob/master/lib/src/dataservices/default-data.service.spec.ts
 */
describe('StarWarsFilmDataService', () => {
  const filmsUrl = 'api/films/';
  const httpUrlGenerator = new DefaultHttpUrlGenerator(null);
  httpUrlGenerator.registerHttpResourceUrls({
    Film: {
      entityResourceUrl: 'api/film/',
      collectionResourceUrl: filmsUrl,
    },
  });

  const createService = createHttpFactory({
    service: StarWarsFilmDataService,
    providers: [
      {
        provide: HttpUrlGenerator,
        useValue: httpUrlGenerator,
      },
      {
        provide: Logger,
        useValue: {},
      },
      {
        provide: DefaultDataServiceConfig,
        useValue: {},
      },
    ],
  });
  let spectator: SpectatorHttp<StarWarsFilmDataService>;

  beforeEach(() => spectator = createService());

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });

  it('should return films from the API end point', (done) => {
    const expected: IStarWarsFilm[] = [
      {
        title: 'a',
      }
    ];

    spectator.service.getAll().subscribe((result) => {
      expect(result[0].title).toEqual(expected[0].title);
      done();
    });

    const req = spectator.controller.expectOne('api/films/');
    expect(req.request.method).toEqual('GET');
    req.flush({
      results: expected,
    });
  });
});
