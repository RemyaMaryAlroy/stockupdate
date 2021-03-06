import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  products: any[]=[];
  ngOnInit() {
     this.products = this.getProductList();
  }
  getProductList(){
	  return [{ 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
            { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
            { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
            { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
            { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
        ];
	 }
	 changeStock(data){ 
	  var id = data.id;
	  this.products.forEach(product =>{
	   if(product.id == id){
	   	 product.stock += data.newstock;
	   }  
	  }
	   )
	  
	  }
	  
	 }
 
}
