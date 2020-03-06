/* istanbul ignore file */

import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { IStarWarsFilm } from '../../models/i-star-wars-film';

@Injectable({
  providedIn: 'root'
})
export class StarWarsFilmService extends EntityCollectionServiceBase<IStarWarsFilm> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Film', serviceElementsFactory);
  }
}
