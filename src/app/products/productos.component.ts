import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lista-productos',
    templateUrl: './lista-productos.html',
})

export class ProductosComponent implements OnInit {
    productos=[
        {"id":1,"nombre":"botella", "precio":234},
        {"id":2,"nombre":"lapiz", "precio":4},
        {"id":3,"nombre":"silla", "precio":24},
        {"id":4,"nombre":"mesa", "precio":234},
        {"id":5,"nombre":"televisión", "precio":234},
    ]
    constructor() { }

    ngOnInit() { }
}
