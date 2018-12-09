import { Component, OnInit,AfterViewChecked,Input } from '@angular/core';
import {Product} from "./product"
@Component({
  selector: 'ng6-slider',
  templateUrl:'./slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit,AfterViewChecked{

@Input() width:any;
@Input() height:any;
 //  parameter of slider config
 noOfGrps:any;
 totalProducts:number;
 @Input() productsToShow:number=3;
 widthOfGrp:any;
 widthOfProduct:any;
 widthOfBelt:any;
 conveyorPosition:number=0;
 @Input() products:Product[];
  constructor() { }

  ngOnInit() {
  	
  }
  // get all the parameter config for slider after the dom gets loaded 
  ngAfterViewChecked(){
    // calculating the total number of products -------------//
    this.totalProducts=this.products.length;

    var grp=document.getElementById('group') ;
    var conveyor=document.getElementById('conveyor');
    
    let prods=document.getElementsByClassName("flex-item");
    // sum of width's of all grps ------------------//
    this.noOfGrps=Math.ceil(this.totalProducts/this.productsToShow);
    this.widthOfGrp=Number(this.noOfGrps*100);
    grp.style.width=String(this.widthOfGrp+"%");


    // calculate width of the belt and assign to conveyor
    var tvp=Number(this.productsToShow*this.noOfGrps);
    this.widthOfBelt=Number((this.totalProducts/tvp)*100);
    conveyor.style.width=String(this.widthOfBelt+"%");


    // width of each items and assign to flex-item
    //this.widthOfProduct=Number(100/this.productsToShow);
    
    

    
  
}

//  trigger the function for sliding left
  shiftL(){
    var offset=(100/this.noOfGrps)
    if((this.conveyorPosition-offset)>-100){
      this.conveyorPosition-=offset;
      this.transform(this.conveyorPosition);
    }
    
}
// trigger the function for sliding right
  shiftR(){
    var offset=(100/this.noOfGrps)
    if((this.conveyorPosition+offset)<=0){
    this.conveyorPosition+=offset;
    this.transform(this.conveyorPosition);
  }
}
// add transition to each slide
  transform(n){
    var conveyor=document.getElementById('group');
    conveyor.style.transform="translate("+String(n)+"%)"
  }

// advance feacture to swipe item left 
  swipe(idx, type){
    console.log(idx,type);
  }

}
