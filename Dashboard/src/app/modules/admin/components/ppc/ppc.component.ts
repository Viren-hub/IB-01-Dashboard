import { SharedService } from 'src/app/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';



import { FormGroup, FormControl, Validators, NgForm }  from '@angular/forms';
import swal from 'sweetalert2';



import { Observable, switchAll } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ppc',
  templateUrl: './ppc.component.html',
  styleUrls: ['./ppc.component.css']
})
export class PpcComponent implements OnInit {
  [x: string]: any;

  
  userData: any;
singleData:any=null;
userId:any;
invalid: any;
  @ViewChild('myForm')
  myForm!: NgForm;


userAllData:any;

constructor(private http:SharedService){

    this.http.getData().subscribe((data:any)=>
    {
      this.userAllData=data.data;
      console.log("Using getdata",this.userAllData.length);
    })
}
errorMassage:any;
studentForm= new FormGroup({
  'P_Id': new FormControl('',Validators.required),
  'P_Name': new FormControl('',Validators.required),
  'P_Email': new FormControl('',Validators.required),
  'P_Mobile':new FormControl('',Validators.required),
  'P_PendingFees': new FormControl('',Validators.required),
  'P_PaidFees': new FormControl('',Validators.required)

})

userSubmit(){
  if(this.studentForm.valid){
 console.log(this.studentForm);
 this.http.createPpc(this.studentForm.value).subscribe((res)=>{ 
 })
  }
  else{

    this.errorMassage="All field required"
    console.log(this.errorMassage);
    this.userSubmit()
  }
  console.log(this.studentForm.value);

}

get f(){
  return this.studentForm.controls;
}

alertSuccess()
{
  if(this.studentForm.valid){
    swal.fire("Thank You...",'You Submitted Successfully','success');
  }
 else{
 
 
 }
}
ngOnInit(): void {

  
}
}