import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  user : any;
  id : any;
 
  constructor(private location:Location, private route: ActivatedRoute){
  }
 
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.location.getState();
  }
  // ngOnInit() {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.route
  //     .data
  //     .subscribe(v =>{ 
  //       this.user = v[this.id];
  //       console.log(v[this.id])});
  // }

  // ngOnDestroy() {
  //   this.user.unsubscribe();
  // }
}
