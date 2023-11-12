import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesComponent, MovieComponent, EditMovieComponent, AddMovieComponent],
  imports: [CommonModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
})
export class PagesModule {}
