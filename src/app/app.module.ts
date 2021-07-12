import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { StreamingComponent } from './movies/movie-list/streaming/streaming.component';
import { TrailersComponent } from './movies/movie-list/trailers/trailers.component';
import { HttpClientModule } from '@angular/common/http';
import { TrailerModalComponent } from './movies/movie-list/trailers/trailer-modal/trailer-modal.component';
import { PlaceholderDirective } from './shared/placeHolder/placeholder.directive';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieListComponent,
    StreamingComponent,
    TrailersComponent,
    TrailerModalComponent,
    PlaceholderDirective,
    SafePipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TrailerModalComponent
  ]
})
export class AppModule {}
