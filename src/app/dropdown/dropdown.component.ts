import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserdataserviceService } from '../userdataservice.service';
import {HttpClient } from '@angular/common/http';
import { MyserviceService } from '../myservice.service'
import { NewCmpComponent } from '../new-cmp/new-cmp.component';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnDestroy{
  title = 'Angular 6 Project!';
  Country = null;
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  countries = [
    { id: 1, name: "United States" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "England" }
  ];
  serverID: number = 10;  
  serverStatus: string = 'Offline';  
  messages: any[] = [];
  subscription: Subscription;
  
  fruits:string[]=[];
  child:string[]=[];
  employee:any;
  months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];
  isavailable = false;
  contactForm:FormGroup;
  constructor(public userdate:UserdataserviceService, public http:HttpClient,private fb:FormBuilder, private messageService: MessageService) { 
    console.log(`new - data is ${this.data}`);
    this.contactForm=fb.group({
      yourName: ['', [Validators.required, Validators.minLength(3)]],
      yourEmail: ['', [Validators.required, Validators.email]],
      yourPhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]]
  
    })
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';  
  }


  ngOnInit():void {
    this.getUserList()
  }
  
  myClickFunction(event: any) {
    this.isavailable = false;
  }

  changemonths(event: any) {
    alert("Changed month from the Dropdown");
    console.log(event);

  }
 

  addParent(ele:any){
    this.child.push(ele);
  }
  onClickSubmit(ele:any){
    this.fruits.push(ele.value.input);
  }

    user={
      name:"sristi",
      email:"sristi@123",
      phone:"6388166436"
    }
    reactiveSubmit(){
      let name=this.contactForm.get('yourName')?.value;
      let email=this.contactForm.get('yourEmail')?.value;
      let phone=this.contactForm.get('yourPhone')?.value;
      console.log(name+ " "+ email+" "+phone)
      this.contactForm.reset();
      
    }
    setDate(){
      this.contactForm.setValue({
        "yourName":'sristi',
        "yourEmail":'sristi@123',
        "yourPhone": '6388166436'
      })
    }
    Onsubmit(ele:any){
      this.userdate.SaveUser(ele).subscribe((Response)=>{
        console.log(Response)
      },
      error=>{
        console.log(error)
      })
    }

  getUserList(){
    this.userdate.getUserData().subscribe(Response=>{
      this.employee=Response;
      console.log(Response)
     }, (error) => {
       console.log('getUserList' , error)
     }

     );
}

AddStyle(){
  return{
    'font-size.px':20,
    'font-style':'bold',
    'color':'red'
  }
}

AddClass(){
  return{
    'btn-bold': true,
    'btn-blue':true,
    'btn-size.px':20
  }
}

data:number=100;

    

    ngOnChanges() {
        console.log(`ngOnChanges - data is ${this.data}`);
    }

    ngDoCheck() {
        console.log("ngDoCheck")
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    fnAddNumber():void{
        this.data+=100;
    }

    deleteNumber():void{
        this.data -=10;
    }

    getUserFormData(data:any)
    {
      this.userdate.SaveUser(data).subscribe((Response)=>{
        console.log(Response)
      },
      error=>{
        console.log(error)
      })
    }
    modSubmit(){
      this.userdate.SaveUser(this.contactForm.value).subscribe((Response)=>{
        console.log(Response)
      },
      error=>{
        console.log(error)
      })
    }
}
