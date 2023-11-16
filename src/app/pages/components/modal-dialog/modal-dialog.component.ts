import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'modal-dialog-dashboard',
  templateUrl: 'modal-dialog.component.html',
})
export class ModalDialogComponent implements OnInit {
  ngOnInit() {
    this.utilitiesService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['movie']) {
      this.patchFormValues();
    }
  }

  @Input() movie!: Movie;
  @Output() updatedMovies = new EventEmitter<Movie[]>();

  public isVisible: boolean = false;
  public submitted: boolean = false;
  public form: FormGroup = this.fb.group({
    title: [this.movie?.title, [Validators.required]],
    synopsis: [this.movie?.synopsis, [Validators.required]],
    year: [this.movie?.year, [Validators.required]],
    cover: [this.movie?.cover, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private utilitiesService: UtilitiesService,
    private moviesService: MoviesService
  ) {}

  hideDialog() {
    this.isVisible = false;
    this.submitted = false;
  }

  saveMovie() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.moviesService.editMovie(this.form.value, this.movie.id! ).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Se actualizó el registro',
        });
        this.moviesService
          .getMovies()
          .subscribe(movies => this.updatedMovies.emit(movies));
      },
      error: (resp: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ups!',
          detail: `${resp}`,
        });
      },
    });

    this.isVisible = false;
  }

  
  private patchFormValues() {
    if (this.movie) {
      this.form.patchValue(this.movie);
    }
  }
}
