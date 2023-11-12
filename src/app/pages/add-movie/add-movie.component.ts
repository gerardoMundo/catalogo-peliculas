import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styles: [
  ]
})
export class AddMovieComponent {
  constructor(private fb: FormBuilder, private movieService: MoviesService) {}

  public form: FormGroup = this.fb.group({
    title: ["", [Validators.required]],
    synopsis: ["", [Validators.required]],
    year: [null, [Validators.required]],
    cover: ["", [Validators.required]],
  })

  public onSubmit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }

    this.movieService.addMovie(this.form.value).subscribe(response => console.log(response)
    )
    this.form.reset();
  }
}
