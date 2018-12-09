import { Component ,OnInit} from '@angular/core';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  products:any=[
	{
		name:"p1",
		price:2,
		image:"https://images-na.ssl-images-amazon.com/images/I/71KjfWD%2ByeL._SL1500_.jpg",
		link:"/home",
		linkName:"click",
		inStock:3,
		description:"efdesa"
	},
	{
		name:"p2",
		price:5,
		image:"https://images-na.ssl-images-amazon.com/images/I/71PVT0UkmNL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"efdesa"
	},
	{
		name:"p3",
		price:10,
		image:"https://images-na.ssl-images-amazon.com/images/I/61IM1qjdoEL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"efdesa"
	},
	{
		name:"p4",
		price:10,
		image:"https://images-na.ssl-images-amazon.com/images/I/7129mZZlfSL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"efdesa"
	},
	{
		name:"p5",
		price:5,
		image:"https://images-na.ssl-images-amazon.com/images/I/71PVT0UkmNL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"efdesa"
	},
	{
		name:"p6",
		price:2,
		image:"https://images-na.ssl-images-amazon.com/images/I/71KjfWD%2ByeL._SL1500_.jpg",
		link:"ffcads",
		inStock:3,
		description:"efdesa"
	},
];

  ngOnInit(){

  }
}
