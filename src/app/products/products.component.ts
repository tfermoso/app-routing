import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service';
@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductosService]
})
export class ProductsComponent implements OnInit {
  products=[];
  constructor(private productosService:ProductosService) { }

  ngOnInit() {
    this.products=this.productosService.getProductos();
  }

 

}
