import { EntityMetadataMap } from '@ngrx/data';
import { IStarWarsFilm } from '../models/i-star-wars-film';

const entityMetadata: EntityMetadataMap = {
  Film: {
    selectId: (film: IStarWarsFilm) => film.episode_id,
  },
};

export const entityConfig = {
  entityMetadata,
};
