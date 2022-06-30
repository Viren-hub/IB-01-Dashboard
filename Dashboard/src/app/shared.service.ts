import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  ppcData: any;

  constructor(private http: HttpClient) { 

  }
  getData(){
    let url="http://localhost:3000/ppc/";
    return this.http.get(url);
  }
  getSingleData(uuid:any){
    // this.userId=val;
    let url=`http://localhost:3000/ppc/${uuid}`;
    return this.http.get(url);
  }
  createIntern(data:any){
    let url="http://localhost:3001/internship";
    return this.http.post(`${url}`,data);
  }
  createPpc(data1:any){
    let url="http://localhost:3000/ppc";
    return this.http.post(`${url}`,data1);
  }
  createLogic(data2:any){
    let url="http://localhost:3002/logicbuilding";
    return this.http.post(`${url}`,data2);
  }
}