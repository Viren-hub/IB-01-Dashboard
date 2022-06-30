import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


import { FormGroup, FormControl, Validators }  from '@angular/forms';

@Component({
  selector: 'app-logic-building',
  templateUrl: './logic-building.component.html',
  styleUrls: ['./logic-building.component.css']
})
export class LogicBuildingComponent implements OnInit {

  constructor(private http:SharedService){
    
  }
  errorMassage:any;
  studentForm= new FormGroup({
    'Id': new FormControl('',Validators.required),
    'Name': new FormControl('',Validators.required),
    'Email': new FormControl('',Validators.required),
    'Mob':new FormControl('',Validators.required),
    'PendingFees': new FormControl('',Validators.required),
    'Paidfees': new FormControl('',Validators.required)

  })
  userSubmit(){
    if(this.studentForm.valid){
   console.log(this.studentForm);
   this.http.createLogic(this.studentForm.value).subscribe((res:any)=>{
     
   })
    }
    else{

      this.errorMassage="All field required"
    }
  }
  ngOnInit(): void {
  }


}