import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import {RouterModule} from "@angular/router"
@NgModule({
  imports: [
  CommonModule,
  RouterModule
  ],
  declarations: [SliderComponent],
  exports: [SliderComponent]
})
export class SliderModule { }
