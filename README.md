# NG6-SLIDER

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve slidePlayer` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Clone the directory in your local pc and open the command promt in the app folder and follow the steps mention below.

1. Type `npm install` which will load all the modules for angular.
2. Type `ng build slider` which will build the module in dist folder.
3. Type `npm install dist/slider` which will install the module for use in app
4. Type `ng serve slidePlayer -o` to serve the application slideplayer which is present inside the projects directory
5. To make any changes to `slider` Module move to projects/slider/lib/ folder and to rebuild it follow `step2` and serve the slidePlayer again to see the changes. 


## Install module to your project

Type `npm install` ng6-slider --save

## Use the code in your application
 
1. Add the code `<ng6-slider [products]="products" [productsToShow]="3"></ng6-slider>` to your components html file
2. Add the Code ```products:any=[
	  {
		  name:"p1",
		  price:2,
		  image:"https://images-na.ssl-images-amazon.com/images/I/71KjfWD%2ByeL._SL1500_.jpg",
		  link:"/home",
		  linkName:"click",
		  inStock:3,
		  description:"some description" 
    },
  ]
  ```
  to components ts file as this will provide the details of elemets to be displayed .
  
  ### Note
  The `products ` variable mention above is array of json and it is not mandetory to provide all the fields mention like `name,price`.

//-------------------- enjoy coding --------------//




