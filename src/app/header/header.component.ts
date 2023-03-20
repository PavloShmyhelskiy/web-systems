import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() userData: {
    name: string
  } = {
    name: 'userName'
  }

  @Output("show") show: EventEmitter<any> = new EventEmitter();

  constructor() {
  }
}
