import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styles: [
  ]
})
export class AddMovieComponent {
  constructor(private fb: FormBuilder, 
              private movieService: MoviesService, 
              private messageService: MessageService
              ) {}

  public form: FormGroup = this.fb.group({
    title: ["", [Validators.required]],
    synopsis: ["", [Validators.required]],
    year: [null, [Validators.required]],
    cover: ["", [Validators.required]],
  })

  public loading: boolean = false;

  public onSubmit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.movieService.addMovie(this.form.value)
    .subscribe(
      {
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Película agregada correctamente',
          });
          this.loading = false;
  
          this.form.reset();
        },
        error: (resp: HttpErrorResponse) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Ups...',
            detail: `${resp}`,
          });
  
          this.loading = false;
        },
      }
    )
    
    this.form.reset();
  }
}
