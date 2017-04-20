import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'lista-productos',
    templateUrl: './lista-productos.html',

})

export class ProductosComponent implements OnInit {
    @Input()
    productos=[]


    ngOnInit() {
          
     }
}
