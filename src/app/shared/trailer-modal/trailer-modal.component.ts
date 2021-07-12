import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component ({
  selector: 'app-trailer-modal',
  templateUrl: './trailer-modal.component.html',
  styleUrls: ['./trailer-modal.component.css']
})
export class TrailerModalComponent {

@Input() trailer: string;
@Output() close  = new EventEmitter<void>();

onClose() {
this.close.emit();
}
}
