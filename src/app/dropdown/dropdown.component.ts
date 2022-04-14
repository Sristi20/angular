import { Component, OnInit } from '@angular/core';
import { UserdataserviceService } from '../userdataservice.service';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  Country = null;
  countries = [
    { id: 1, name: "United States" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "England" }
  ];
  userinfo:any=[];
  months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];
  isavailable = false;
  constructor(public userdate:UserdataserviceService, public http:HttpClient) { }


  ngOnInit(): void {
    this.getUserList()
  }
  
  myClickFunction(event: any) {
    this.isavailable = false;
  }

  changemonths(event: any) {
    alert("Changed month from the Dropdown");
    console.log(event);

  }

  getUserList(){
    this.userdate.getUserData().subscribe(Response=>{
      this.userinfo=Response;
      
     }, (error) => {
       console.log('getUserList' , error)
     }

     );
}

}