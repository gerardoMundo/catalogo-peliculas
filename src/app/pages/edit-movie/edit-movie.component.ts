import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
})
export class EditMovieComponent {
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(data => (this.movies = data));
    this.utilitiesService.setVisibility(false);
  }

  public movies: Movie[] = [];
  public movie!: Movie;
  public submitted: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private moviesService: MoviesService,
    private utilitiesService: UtilitiesService
  ) {}

  editMovie(movie: Movie) {
    this.utilitiesService.setVisibility(true);
    this.movie = movie;
  }

  deleteMovie(movie: Movie) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de eliminar: ' + movie.title + '?',
      header: 'Confirmar acción',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.moviesService.deleteMovie(movie.id!).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Película eliminada',
              life: 3000,
            });
            this.movies = this.movies.filter(val => val.id !== movie.id);
          },
          error: (resp: HttpErrorResponse) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: `${resp}`,
              life: 3000,
            });
          },
        });
      },
    });
  }

  public updateMovies(movies: Movie[]): void {
    this.movies = movies;
  }

  @ViewChild('dt') dt!: Table;
  public applyFilterGlobal($event: any, stringVal: string) {
    this.utilitiesService.filtering($event, stringVal, this.dt);
  }
 }
