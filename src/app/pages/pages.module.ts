import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AddButtonComponent } from './components/buttons/add-button.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';


@NgModule({
  providers: [ConfirmationService, MessageService],
  declarations: [MoviesComponent, 
                MovieComponent, 
                EditMovieComponent, 
                AddMovieComponent, 
                WelcomePageComponent, 
                AddButtonComponent, ModalDialogComponent],
  imports: [CommonModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
})
export class PagesModule {}
