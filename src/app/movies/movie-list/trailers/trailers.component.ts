import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';

import { GetMoviesService } from 'src/app/shared/services/get-movies.service';
import { PlaceholderDirective } from 'src/app/shared/placeHolder/placeholder.directive';
import { TrailerModalComponent } from 'src/app/movies/movie-list/trailers/trailer-modal/trailer-modal.component';
import { Trailers } from 'src/app/shared/models/trailers.model';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss'],
})
export class TrailersComponent implements OnInit {
  @Input() trailer_key?: string;
  @Input() trailer_name?: string;
  // trailers: Trailers[] = [];
   watchingTrailer = false;
  //  getMovieService: GetMoviesService;
  // @ViewChild(PlaceholderDirective) trailerHost: PlaceholderDirective;

  constructor(private modalService: NgbModal,
    private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getSanitizedUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  open(content: any) {
    this.modalService.open(content, {
      size: 'xl', centered: true
    })
  }

  onPlayTrailer() {
    this.watchingTrailer = true;
    // this.getMovieService.watchTrailerUpdated.emit(this.watchingTrailer);
  }

  // private playTrailerModal() {

  //   const trailerModalCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
  //     TrailerModalComponent
  //     );
  //     const hostViewContainerRef = this.trailerHost.viewContainerRef;
  //     hostViewContainerRef.clear();

  //     hostViewContainerRef.createComponent(trailerModalCmpFactory);

  // }
}
