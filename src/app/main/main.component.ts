import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private userService: UserService){}
  users: any
  getUsers(): void {
    this.users = this.userService.getUsers();
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
