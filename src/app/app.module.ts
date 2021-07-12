import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { StreamingComponent } from './movies/movie-list/streaming/streaming.component';
import { TrailersComponent } from './movies/movie-list/trailers/trailers.component';
import { HttpClientModule } from '@angular/common/http';
import { TrailerModalComponent } from './shared/trailer-modal/trailer-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieListComponent,
    StreamingComponent,
    TrailersComponent,
    TrailerModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
