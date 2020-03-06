import { Injectable } from '@angular/core';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator, Logger, QueryParams } from '@ngrx/data';
import { IStarWarsFilm } from '../../models/i-star-wars-film';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @link https://stackoverflow.com/questions/59073752/ngrx-data-how-can-i-extend-a-collection-reducer-replace-handling-of-the-res
 */
@Injectable({
  providedIn: 'root'
})
export class StarWarsFilmDataService extends DefaultDataService<IStarWarsFilm> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    logger: Logger,
    config: DefaultDataServiceConfig
  ) {
    super('Film', http, httpUrlGenerator, config);
  }

  getAll(): Observable<IStarWarsFilm[]> {
    return super.getAll()
      .pipe(map((res: any) => res.results.map(film => {
        return film;
      })));
  }
}
