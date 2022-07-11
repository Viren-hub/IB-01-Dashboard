import { SharedService } from 'src/app/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm }  from '@angular/forms';
import swal from 'sweetalert2';
import { Observable, switchAll } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-ppc',
  templateUrl: './ppc.component.html',
  styleUrls: ['./ppc.component.css']
})
export class PpcComponent implements OnInit {
  selectedFile: File= null!;
  [x: string]: any;

  
  userData: any;
singleData:any;
userId:any;
invalid: any;
  @ViewChild('myForm')
  myForm!: NgForm;
  

userAllData:any;

constructor(private http:SharedService){

    this.http.getData().subscribe((data:any)=>
    {
      this.userAllData=data.data;
      console.log(data.data);
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
  'P_PaidFees': new FormControl('',Validators.required),
  'P_Image': new FormControl('',Validators.required)

})

userSubmit(){
  if(this.studentForm.valid){
 console.log(this.studentForm);
 
 this.http.createPpc(this.studentForm.value).subscribe((res)=>{ 
 })
 this.studentForm.reset();
  }
  else{

    this.errorMassage="All field required"
    console.log(this.errorMassage);
    this.userSubmit();
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
onUpload(){
  const fd= new FormData();
  fd.append('image',this['selectedFile'],this.selectedFile.name);
  this.http. uploadImage('http://localhost:3000/Ppc').subscribe((res:any)=>{
    console.log(res);
  });
}
onFileSelected(event: any){
  this.selectedFile= <File>event.target.files[0];
  
}

getVal(value:any){
  // console.log(value);
  this.http.getSingleData(value).subscribe((data:any)=>{
      this.singleData=data.data;
      // console.log(this.singleData[0].P_Name);
      
  })
}




ngOnInit(): void {

  
}
}
