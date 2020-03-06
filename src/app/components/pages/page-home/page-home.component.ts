import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStarWarsFilm } from '../../../models/i-star-wars-film';
import { StarWarsFilmService } from '../../../services/star-wars-film/star-wars-film.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  loading$: Observable<boolean>;
  films$: Observable<IStarWarsFilm[]>;

  constructor(private starWarsFilmService: StarWarsFilmService) {
    this.films$ = starWarsFilmService.entities$;
    this.loading$ = starWarsFilmService.loading$;
  }

  ngOnInit(): void {
    this.starWarsFilmService.getAll();
  }
}
