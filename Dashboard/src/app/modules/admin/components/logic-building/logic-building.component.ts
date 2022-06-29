import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-logic-building',
  templateUrl: './logic-building.component.html',
  styleUrls: ['./logic-building.component.css']
})
export class LogicBuildingComponent implements OnInit {

  userData: any=[];

  constructor(private adm:SharedService) { 
    this.adm.ppcData().subscribe((data: any)=>{
      console.log(data);
      this.userData= data.data;
    })
  }

  ngOnInit(): void {
  }

}
