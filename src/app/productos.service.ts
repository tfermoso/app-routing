import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  constructor() { }

  getProductos(){
    return  [
        {"id":1,"nombre":"botella", "precio":234},
        {"id":2,"nombre":"lapiz", "precio":4},
        {"id":3,"nombre":"silla", "precio":24},
        {"id":4,"nombre":"mesa", "precio":234},
        {"id":5,"nombre":"televisión", "precio":234},
    ]
  }

}
