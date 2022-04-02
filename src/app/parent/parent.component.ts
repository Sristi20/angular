import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   Pafruits:string[]=[];
   
   addChild(ele:any){
     this.Pafruits.push(ele.fruit);
   }
   items:string[] = [];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  constructor() { 

  }

  ngOnInit(): void {
  }

}
