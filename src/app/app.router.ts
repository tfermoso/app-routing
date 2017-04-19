import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ProductComponent } from './products/product.component';
import { ProductsComponent } from './products/products.component';
import { MembersComponent } from './members/members.component';
import { ReactiveFormComponent} from './reactive-form/reactive-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
   { path: 'members', component: MembersComponent },
   { path: 'reactiveform', component:ReactiveFormComponent},
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}