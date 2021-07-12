import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Trailers } from "../../../../shared/models/trailers.model";



@Component ({
  selector: 'app-trailer-modal',
  templateUrl: './trailer-modal.component.html',
  styleUrls: ['./trailer-modal.component.css']
})
export class TrailerModalComponent {
@Input() trailer: string;
@Input() trailer_key?: string;


@Output() close  = new EventEmitter<void>();

onClose() {
this.close.emit();
}

createUrl() {
'https://www.youtube.com/embed/'+{{trailer_key}}+'?rel=0'
}
}
