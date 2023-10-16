import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';

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
    path: '**',
    redirectTo: 'movies',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
