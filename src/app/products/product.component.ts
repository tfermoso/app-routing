import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'product',
    template: `
    <h2>Product detail</h2>
    <p>Product id: {{id}} </p>
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
        this.id = +this.route.snapshot.params['id'];


    }

}