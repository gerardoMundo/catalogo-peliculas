import { Component } from '@angular/core';
import { Movie } from './movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [],
})
export class MoviesComponent {
  public movies: Movie[] = [
    {
      title: 'Walking dead',
      synopsis: 'A terror film',
      year: 1972,
      cover: 'Winnona Ryder',
    },
    {
      title: 'Alien',
      synopsis: 'A horror film',
      year: 1978,
      cover: 'Sigourney Weaver',
    },
    {
      title: 'It: a Stephen King Movie',
      synopsis: 'A terror film',
      year: 1988,
      cover: 'Stephen King',
    },
  ];
}
