import { Component, OnInit ,AfterViewChecked} from '@angular/core';
import {Product} from "../product"
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,AfterViewChecked {
 //  parameter of slider config
 width:any;
 height:any;
 noOfGrps:any;
 totalProducts:number;
 productsToShow:number=3;
 widthOfGrp:any;
 widthOfProduct:any;
 widthOfBelt:any;
 conveyorPosition:number=0;
 products:Product[]=[
	{
		name:"iphone",
		//price:2,
		image1:"https://images-na.ssl-images-amazon.com/images/I/71KjfWD%2ByeL._SL1500_.jpg",
		link:"/home",
		inStock:3,
		//description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
	},
	{
		name:"android",
		price:5,
		image1:"https://images-na.ssl-images-amazon.com/images/I/71PVT0UkmNL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
	},
	{
		name:"iphone6",
		price:10,
		image1:"https://images-na.ssl-images-amazon.com/images/I/61IM1qjdoEL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
	},
	{
		name:"android lolipop",
		price:10,
		image1:"https://images-na.ssl-images-amazon.com/images/I/7129mZZlfSL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
	},
	{
		name:"Mi Redme 4a",
		price:5,
		image1:"https://images-na.ssl-images-amazon.com/images/I/71PVT0UkmNL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
	},
	{
		name:"yu yunique",
		price:2,
		image1:"https://images-na.ssl-images-amazon.com/images/I/71KjfWD%2ByeL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
	},
	{
		name:"Mi y1 lite",
		price:2,
		image1:"https://images-na.ssl-images-amazon.com/images/I/71KjfWD%2ByeL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
	},
];

  constructor() { }

  ngOnInit() {
  	
  }
// get all the parameter config for slider after the dom loads
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
