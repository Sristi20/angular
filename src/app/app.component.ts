import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 6 Project!';
  todaydate:any;
   componentproperty:any;
   emailid:any;
   formdata:any;
   messages: any[] = [];
    
   contactForm:FormGroup;
   constructor(private myservice: MyserviceService,private messageService: MessageService,private fb:FormBuilder) { 
     // subscribe to home component messages
     /*this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    }*/
      
      this.contactForm=fb.group({
        yourName: ['', [Validators.required, Validators.minLength(3)]],
        yourEmail: ['', [Validators.required, Validators.email]],
        yourPhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
        yourPassword:['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]]
      });
   }
   user={
    name:"sristi",
    email:"sristi@123",
    password:  'test',
    phone:"6388166436"
  }
  reactiveSubmit(){
    let name=this.contactForm.get('yourName')?.value;
    let email=this.contactForm.get('yourEmail')?.value;
    let phone=this.contactForm.get('yourPhone')?.value;
    let password=this.contactForm.get('yourPassword')?.value;
    console.log(name+ " "+ email+" "+phone+" "+password)
    this.contactForm.reset();
    
  }
  Onsubmit(ele:any){
    console.log(ele)
  }
  setDate(){
    this.contactForm.setValue({
      "yourName":'sristi',
      "yourEmail":'sristi@123',
      "yourPhone": '6388166436',
      "yourPassword": 'test'
    })
  }

  ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
      this.formdata = new FormGroup({
         emailid: new FormControl("angular@gmail.com"),
         passwd: new FormControl("abcd1234")
      });
      
  }
   onClickSubmit(data:any) {this.emailid = data.emailid;
  }
}

