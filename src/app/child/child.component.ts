import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentFormInfo:any;
  constructor() { }
@Output() fruits=new EventEmitter<string>();
childInfo:string[]=[];
onSubmit(ele:any){
  this.fruits.emit(ele.value.input);
  this.childInfo.push(ele.value.input);
}

  ngOnInit(): void {
  }

}
