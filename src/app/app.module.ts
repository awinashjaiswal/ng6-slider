import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
const approute:Routes=[
  {path:"",component:ProductsComponent},
  {path:"home",component:AppComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
