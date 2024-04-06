import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})


export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  /*
  Inject ActivatedRoute into the constructor() by adding private route: ActivatedRoute as an argument within the constructor's parentheses.
  */
  /* 
  ActivatedRoute is specific to each component that the Angular Router loads. 
  ActivatedRoute contains information about the route and the route's parameters.
  By injecting ActivatedRoute, you are configuring the component to use a service. 
  The Managing Data step covers services in more detail.
  */

  constructor(
    private route: ActivatedRoute,
    private cartService : CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find((c) => c.id === productIdFromRoute);

    //this.product = products[0];             
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('product has been added to the cart! ' + product.id);
  }  

}
