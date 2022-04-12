import { Component } from '@angular/core';
import { UserdataserviceService } from './userdataservice.service';

import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  userinfo:any=[];
  data:any;
  constructor(private userdate:UserdataserviceService, private http:HttpClient){
    this.userdate.getUserData().subscribe(data=>{
     this.userinfo=data;
 
    });
  }
}