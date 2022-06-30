import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ppc',
  templateUrl: './ppc.component.html',
  styleUrls: ['./ppc.component.css']
})
export class PpcComponent implements OnInit {

  
  userData: any;
singleData:any=null;
userId:any;

  constructor(private ppc:SharedService) { 
    this.ppc.getData().subscribe((dataSingle:any)=>{
      this.userData=dataSingle.data;
     // console.log(dataSingle.data);
      
    }
    )

    this.ppc.getSingleData('').subscribe((data: any)=>{
      // this.name = data.data[1].P_Name;
       
      console.log(data)
      this.userData= Object.values(data.data);
         
      })
  }
  getValue(value:any){
    
   this.userId=value;
   console.log(this.userId)
   this.ppc.getSingleData(this.userId).subscribe((res:any)=>{
    console.log(res.data[0].P_Name);
   })
}
 
  
  ngOnInit(): void {
  
  }
}
