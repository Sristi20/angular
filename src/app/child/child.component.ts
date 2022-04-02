import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  parentFruits!: string[];
  @Output() Chifruits=new EventEmitter<string>();
   childFruits:string[]=[];
   addParent(ele:any){
     this.Chifruits.emit(ele.fruit);
     this.childFruits.push(ele.fruit);
   }
  constructor() { }

  ngOnInit(): void {
  }
}