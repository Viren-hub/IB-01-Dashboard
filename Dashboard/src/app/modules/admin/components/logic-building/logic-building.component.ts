import { SharedService } from 'src/app/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';



import { FormGroup, FormControl, Validators, NgForm }  from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-logic-building',
  templateUrl: './logic-building.component.html',
  styleUrls: ['./logic-building.component.css']
})
export class LogicBuildingComponent implements OnInit {


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

    this.http.logicData().subscribe((data:any)=>
    {
      this.userAllData=data.data;
      console.log("Using logicData",this.userAllData.length);
    })
}
errorMassage:any;
studentForm= new FormGroup({
  'Id': new FormControl('',Validators.required),
  'Name': new FormControl('',Validators.required),
  'Mob':new FormControl('',Validators.required),
  'Email': new FormControl('',Validators.required),
  'PendingFees': new FormControl('',Validators.required),
  'Paidfees': new FormControl('',Validators.required)

})

userSubmit(){
  if(this.studentForm.valid){
 console.log(this.studentForm);
 
 this.http.createLogic(this.studentForm.value).subscribe(()=>{ 
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
  this.http. uploadImageLogic('http://localhost:3000/logic_building').subscribe((res:any)=>{
    console.log(res);
  });
}
onFileSelected(event: any){
  this.selectedFile= <File>event.target.files[0];
  
}
// ***********************************************************************************************************************

//Aniket's Changes in LB code

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
this.http.getSingleDataLB(value).subscribe((data :any)=>{
  console.log(data) 
  this.singleData=data.data;

  console.log(this.singleData[0].Mob);
  this.saveChange=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(this.singleData[0].Name),
    mobile:new FormControl(this.singleData[0].Mob),
    email:new FormControl(this.singleData[0].Email),
    pending_fees:new FormControl(this.singleData[0].PendingFees),
    paid_fees:new FormControl(this.singleData[0].Paidfees)
  });

})

}

saveChanges(id:any){
  console.log(id);
  this.saveChange.value.id=id;
  console.log(this.saveChange.value);
  this.http.updateChangesLB(id,this.saveChange.value).subscribe((result:any)=>
  {
    console.log(result);  
  });
   
   window.location.reload();
}


// ************************************************************************************************************************

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





  