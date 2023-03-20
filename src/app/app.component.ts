import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: "Pavlo Shmyhelskyi",
  }
  showText = false;
  show() {
    this.showText = !this.showText;
  }
  items = [
    {
      name: 'Iphone',
      price: 1000,
      type: 'phone',
      memory: '256 Gb',
      hide: false
    },
    {
      name: 'Omen',
      price: 1500,
      type: 'pc',
      videocard: 'GTX 3070',
      hide: false
    },
    {
      name: 'Xiaomi',
      price: 250,
      type: 'phone',
      memory: '64 Gb',
      hide: true
    },
    {
      name: 'USB charger',
      price: 50,
      type: '-',
      hide: false
    },
    {
      name: 'Samsung Fold',
      price: 1250,
      type: 'phone',
      memory: '256 Gb',
      hide: false
    }
  ]
  listView = true;
  changeView() {
    this.listView = !this.listView;
  }
  menuItems = [
    {
      label: "Home",
      active: true
    },
    {
      label: "About us",
      active: false
    },
    {
      label: "Services",
      active: false
    },
    {
      label: "Contacts",
      active: false
    }
  ]
}
