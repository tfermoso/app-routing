import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  template: `
    <h2>Product detail</h2>
    <p>Product id: {{id}} </p>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
    id:number=12;
  constructor() { }

  ngOnInit() {
  }

}