import { EntityDataService } from '@ngrx/data';
import { StarWarsFilmDataService } from '../services/star-wars-film-data/star-wars-film-data.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [StarWarsFilmDataService] // <-- provide the data service
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    starWarsFilmDataService: StarWarsFilmDataService
  ) {
    entityDataService.registerService(
      'Film',
      starWarsFilmDataService,
    );
  }
}
