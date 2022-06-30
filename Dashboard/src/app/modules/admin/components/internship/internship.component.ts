import { Component, OnInit, ViewChild } from '@angular/core';

import { internship } from 'src/app/internship';
import { SharedService } from 'src/app/shared.service';

import { FormGroup, FormControl, Validators }  from '@angular/forms';



import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
  constructor(private http:SharedService){
    
  }
  errorMassage:any;
  studentForm= new FormGroup({
    'ID': new FormControl('',Validators.required),
    'Name': new FormControl('',Validators.required),
    'Email': new FormControl('',Validators.required),
    'Mobile':new FormControl('',Validators.required),
    'Pending_fees': new FormControl('',Validators.required),
    'Paid_fees': new FormControl('',Validators.required)

  })
  userSubmit(){
    if(this.studentForm.valid){
   console.log(this.studentForm);
   this.http.createIntern(this.studentForm.value).subscribe((res)=>{
     
   })
    }
    else{

      this.errorMassage="All field required"
    }
  }
  ngOnInit(): void {
  }


}
