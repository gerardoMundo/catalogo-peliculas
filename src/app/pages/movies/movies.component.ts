import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [],
})
export class MoviesComponent implements OnInit {
  ngOnInit(): void {
    this.getMoviesList();
  }

  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  private getMoviesList(): void {
    this.moviesService.getMovies().subscribe((m) => (this.movies = m));
  }
}
