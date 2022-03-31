import { Component, OnInit } from '@angular/core';

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
  constructor() { }
  

  ngOnInit(): void {
  }
  months = ["January", "February", "March", "April",
      "May", "June", "July", "August", "September",
      "October", "November", "December"];
      isavailable = false;
  myClickFunction(event:any) {
    this.isavailable = false;
 }
 changemonths(event:any) {
    alert("Changed month from the Dropdown");
    console.log(event);

}
}
