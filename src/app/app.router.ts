import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { MembersComponent } from './members/members.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
   { path: 'members', component: MembersComponent },
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