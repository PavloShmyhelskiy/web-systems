import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  user : any;
  id : any;
 
  constructor(private userService:UserService, private route: ActivatedRoute){
  }
 
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(this.id);
  }
}
