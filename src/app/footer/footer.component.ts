import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() items: any;
  setActive(label: string){
    for (let item of this.items)
      item.active = item.label === label;
  }
}
