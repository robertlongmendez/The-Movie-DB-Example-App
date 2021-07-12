import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  constructor(private http: HttpClient) {}

  getPopular(): any {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/popular?api_key=97b2f2c2656e5a8bc166291808c8c4b2'
    );
  }

  getProviders(movie_id: any): any {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' +
        `${movie_id}` +
        '/watch/providers?api_key=97b2f2c2656e5a8bc166291808c8c4b2'
    );
  }

  getTrailers(movie_id: any): any {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' +
        `${movie_id}` +
        '/videos?api_key=97b2f2c2656e5a8bc166291808c8c4b2'
    );
  }
}
