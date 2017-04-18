import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'product',
    template: `
    <h2>Product detail</h2>
    <p>Product id: {{id}} </p>
    <button (click)='navegate()'>Next</button>
  `,
    styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
    id: number = 12;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}
    

    ngOnInit() {
        this.route.params
        .subscribe(params=>this.id=+params['id']);
        this.route.url
        .subscribe(()=>this.route.url.forEach(par=>{console.log(`dato ${{par}}`)}));

    }
    navegate(){
        this.router.navigate(['/product', ++this.id]);
    }
}