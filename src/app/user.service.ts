import { Injectable } from '@angular/core';


export class User {
  id: number;
  name: string;
  lastname: string;
  type: string;
  email: string;
  password: string;
  subjects: string[];
  description: string;
  sex: string;
  phone: string;
  constructor(id: number){
    this.id = id;
    this.name = 'Default',
    this.lastname = 'User',
    this.type = 'Type A',
    this.email = "somemail@mail.com",
    this.password = "*****",
    this.subjects = [""],
    this.description = "Default description",
    this.sex = "Male",
    this.phone = "+380*********"
  }  
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  users = [
    new User(1)
  ]
  getUsers(): any{
    return this.users;
  }
  getUsersLength(){
    return this.users.length+1;
  }
  getUser(id: any){
    return this.users[id-1]
  }
  addDefaultUser(){
    const user = new User(this.getUsersLength())
    user.subjects = ["Math", "English"]
    this.users.push(user)
  }
  addUser(user: User){
    this.users.push(user)
  }
}
