import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'appchild',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  
  @Input()
  counter = 0 ; 
  changelog : string[] = []; 
  constructor(){

  } 
  ngOnChanges(changes: SimpleChanges): void {
    
  }  


  ngonchanges(changes : {[propkey:string]: SimpleChange}){

  let  log : string [] =[];
  for(let p in changes){
      let c = changes[p];
      console.log(c);
      let from = JSON.stringify(c.previousValue);
      let to = JSON.stringify(c.currentValue);
      log.push(`${p} changed from ${from} to ${to}`);

  }
}
}
