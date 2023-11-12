import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { EditMovieComponent } from './pages/edit-movie/edit-movie.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';

const routes: Routes = [
  {
    component: MoviesComponent,
    path: 'movies',
  },
  {
    component: MovieComponent,
    path: 'movies/movie',
  },
  {
    component: EditMovieComponent,
    path: 'movies/edit',
  },
  {
    component: AddMovieComponent,
    path: 'movies/add',
  },
  {
    path: '**',
    redirectTo: 'movies',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
