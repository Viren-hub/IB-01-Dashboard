import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userData: any=[];
user:any;
name:any;
  constructor(private update:SharedService) { 
  //this.user=this.ppcC.userId;
  //console.log(this.user);
  
  
  
  
  
   
   console.log("Name",this.name);
   

}
  ngOnInit(): void {
  }

}
