import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [MoviesComponent, MovieComponent],
  imports: [CommonModule, PrimeNgModule],
})
export class PagesModule {}
