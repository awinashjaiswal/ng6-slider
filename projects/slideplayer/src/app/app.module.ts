import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SliderModule} from "slider";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes} from "@angular/router";
const appRoutes:Routes=[
	{path:"home",component:HomeComponent},
	{path:"**", component:AppComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SliderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
