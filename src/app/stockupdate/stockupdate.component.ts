import { Component, OnInit,EventEmitter, Output, OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-stockupdate',
  templateUrl: './stockupdate.component.html',
  styleUrls: ['./stockupdate.component.css']
})
export class StockupdateComponent implements OnInit {

@Input() stock :number;
@Input() id :number;
colorCheckStock;
newUpdateStock: number;
@Output() stockvalueupdate = new EventEmitter();
  constructor() { }

  ngOnInit() {
  this.colorCheckStock = this.stock;
  }
  
  changeStock(){
    this.stockvalueupdate.emit({id: this.id,newstock: this.newUpdateStock});
	this.colorCheckStock = this.stock +this.newUpdateStock;
	this.newUpdateStock = null;
  }
}
