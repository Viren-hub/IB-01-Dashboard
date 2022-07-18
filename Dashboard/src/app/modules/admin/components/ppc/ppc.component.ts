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

  // user : Users [] = [];
  // name:any;

  p: number = 1;
  userData: any;
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

// ************************************************************************************************************************************
  //Aniket's Changes in code
  
    singleData:any;
    // saveChange:any;

    saveChange=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    mobile:new FormControl(''),
    email:new FormControl(''),
    pending_fees:new FormControl(''),
    paid_fees:new FormControl('')
  });

    getVal(value:any){
    console.log(value);
    this.http.getSingleData(value).subscribe((data :any)=>{
      this.singleData=data.data;
      console.log(this.singleData[0].P_Mobile);
      this.saveChange=new FormGroup({
        id:new FormControl(''),
        name:new FormControl(this.singleData[0].P_Name),
        mobile:new FormControl(this.singleData[0].P_Mobile),
        email:new FormControl(this.singleData[0].P_Email),
        pending_fees:new FormControl(this.singleData[0].P_PendingFees),
        paid_fees:new FormControl(this.singleData[0].P_PaidFees)
      });

    })

  }

  saveChanges(id:any){
    console.log(id);
    this.saveChange.value.id=id;
    console.log(this.saveChange.value);
    this.http.updateChanges(id,this.saveChange.value).subscribe((result:any)=>
    {
      console.log(result);  
    });
     
     window.location.reload();
  }


// ***************************************************************************************************************************************

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
 
 this.http.createPpc(this.studentForm.value).subscribe(()=>{ 
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
  this.http. uploadImagePpc('http://localhost:3000/Ppc').subscribe((res:any)=>{
    console.log(res);
  });
}
onFileSelected(event: any){
  this.selectedFile= <File>event.target.files[0];
  
}

ngOnInit(): void { 
//   this['rs'].getUsers().subscribe((Response: any) =>{
//   this.user = Response ;
// })
}

// Search(){
// if(this.name == ""){
//   this.ngOnInit()
// }
// else{
//   this.user = this.user.filter(res =>{
//     return res.name.toLocaleLowerCase.match(this.name.toLocaleLowerCase());
//   })
// }
// }




key : string = '';
reverse: boolean =false;

sort(key:any){
this.key = key;
this.reverse = !this.reverse
}
}
