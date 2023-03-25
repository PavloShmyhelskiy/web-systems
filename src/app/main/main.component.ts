import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private userService: UserService, private router: Router){}
  users: any
  getUsers(): void {
    this.users = this.userService.getUsers();
  }
  ngOnInit(): void {
    this.getUsers();
  }
  navigateToNewUser(){
    this.router.navigate(['newuser']);
  }
}
