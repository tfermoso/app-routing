import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';


@Component({
    selector: 'detalleProducto',
    template: `
        <h2>Detalle producto</h2>
        <table class="table">
         <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let producto of productos">
                <td>{{producto.id}}</td>
                <td>{{producto.nombre}}</td>
                <td>{{producto.precio}}</td>
            </tr>      
        </tbody>
       </table>
    `,
    providers: [ProductosService]
})

export class detalleProducto implements OnInit {

    productos = []
    constructor(private _productoService:ProductosService) { }

    ngOnInit() {
        this.productos=this._productoService.getProductos();
    }
}