import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { Movie } from '../interfaces/movie.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies`).pipe(
      catchError((resp) => {
        throw new Error(resp.errors);
      })
    );
  }

  public addMovie(request: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.baseUrl}/movies`, request).pipe(
      catchError((resp) => {
        throw new Error(resp.errors)
      })
    )
  }

  public editMovie(request: Movie, id: number): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}/movies/${id}`, request).pipe(
      catchError((resp) => {
        throw new Error(resp.errors)
      })
    )
  }

  public deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.baseUrl}/movies/${id}`).pipe(
      catchError((resp) => {
        throw new Error(resp.errors)
      })
    )
  }
}
