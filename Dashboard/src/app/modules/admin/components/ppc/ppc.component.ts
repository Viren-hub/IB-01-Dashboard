
import { SharedService } from 'src/app/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';



import { FormGroup, FormControl, Validators }  from '@angular/forms';



import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ppc',
  templateUrl: './ppc.component.html',
  styleUrls: ['./ppc.component.css']
})
export class PpcComponent implements OnInit {

  
  userData: any;
singleData:any=null;
userId:any;

constructor(private http:SharedService){
    
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
  }
}
ngOnInit(): void {
}


}
