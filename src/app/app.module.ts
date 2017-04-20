import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product.component';
import { MembersComponent } from './members/members.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductosComponent } from './products/productos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    MembersComponent,
    ReactiveFormComponent,
    PagenotfoundComponent,
    ReactiveFormComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
