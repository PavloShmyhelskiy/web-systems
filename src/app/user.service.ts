import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  users = [
    {
      id: 1,
      name: 'Victor',
      lastname: 'Velichko',
      dateOfBirth: new Date(1990,0,2),
      salary: 50000,
      workingHours: 1234567890
    },
    {
      id: 2,
      name: 'Victor 2',
      lastname: 'Velichko',
      dateOfBirth: new Date(1990,3,21),
      salary: 26000,
      workingHours: 2560000
    },
    {
      id: 3,
      name: 'Victor 3',
      lastname: 'Velichko',
      dateOfBirth: new Date(1990,5,15),
      salary: 50000,
      workingHours: 3534
    },
    {
      id: 4,
      name: 'Victor 4',
      lastname: 'Velichko',
      dateOfBirth: new Date(1990,8,7),
      salary: 50000,
      workingHours: 123
    },
    {
      id: 5,
      name: 'Victor 5',
      lastname: 'Velichko',
      dateOfBirth: new Date(1990,0,1),
      salary: 50000,
      workingHours: 123456789
    },
    {
      id: 6,
      name: 'Victor 6',
      lastname: 'Velichko',
      dateOfBirth: new Date(1990,10,28),
      salary: 50000,
      workingHours: 123456789
    },
    {
      id: 7,
      name: 'Victor 7',
      lastname: 'Velichko',
      dateOfBirth: new Date(1990,9,12),
      salary: 50000,
      workingHours: 123456789
    },
    {
      id: 8,
      name: 'Victor 8',
      lastname: 'Velichko',
      dateOfBirth: new Date(1990,5,22),
      salary: 50000,
      workingHours: 123456789
    },
    {
      id: 9,
      name: 'Victor 9',
      lastname: 'Velichko',
      dateOfBirth: new Date(1990,7,8),
      salary: 50000,
      workingHours: 123456789
    },
    {
      id: 10,
      name: 'Victor 10',
      lastname: 'Velichko',
      dateOfBirth: new Date(1990,2,21),
      salary: 50000,
      workingHours: 123456789
    }
  ]
  getUsers(): any{
    return this.users;
  }
  getUser(id: any){
    return this.users[id-1]
  }
}
