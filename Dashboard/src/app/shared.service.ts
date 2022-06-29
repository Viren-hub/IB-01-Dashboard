import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

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

}