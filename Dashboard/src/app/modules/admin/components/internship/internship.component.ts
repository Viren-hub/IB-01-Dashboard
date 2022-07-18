import { SharedService } from 'src/app/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';



import { FormGroup, FormControl, Validators, NgForm }  from '@angular/forms';
import swal from 'sweetalert2';




import { Observable, switchAll } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
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

    this.http.internData().subscribe((data:any)=>
    {
      this.userAllData=data.data;
      console.log("Using getdata",this.userAllData.length);
    })
}
errorMassage:any;
studentForm= new FormGroup({
  'ID': new FormControl('',Validators.required),
  'Name': new FormControl('',Validators.required),
  'Email': new FormControl('',Validators.required),
  'Mobile':new FormControl('',Validators.required),
  'Pending_Fees': new FormControl('',Validators.required),
  'Paid_Fees': new FormControl('',Validators.required)

})

userSubmit(){
  if(this.studentForm.valid){
 console.log(this.studentForm);
 
 this.http.createIntern(this.studentForm.value).subscribe(()=>{ 
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

// ****************************************************************************************************************

// Aniket's changes in Internship 

singleData:any;

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
this.http.getSingleDataIntern(value).subscribe((data :any)=>{
  console.log(data) 
  this.singleData=data.data;

  console.log(this.singleData[0].Mobile);
  this.saveChange=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(this.singleData[0].Name),
    mobile:new FormControl(this.singleData[0].Mobile),
    email:new FormControl(this.singleData[0].Email),
    pending_fees:new FormControl(this.singleData[0].Pending_Fees),
    paid_fees:new FormControl(this.singleData[0].Paid_Fees)
  });

})

}

saveChanges(id:any){
  console.log(id);
  this.saveChange.value.id=id;
  console.log(this.saveChange.value);
  this.http.updateChangesIntern(id,this.saveChange.value).subscribe((result:any)=>
  {
    console.log(result);  
  });
   
   window.location.reload();
}

// **********************************************************************************************************************

onUpload(){
  const fd= new FormData();
  fd.append('image',this['selectedFile'],this.selectedFile.name);
  this.http. uploadImageIntern('http://localhost:3000/internship').subscribe((res:any)=>{
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