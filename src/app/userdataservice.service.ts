
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataserviceService {
  city="India"
  constructor(private http:HttpClient) {
     
   }
   
   getUserData(){
     let dataUrl="https://jsonplaceholder.typicode.com/users";
   return this.http.get(dataUrl);
   }
   
  
}