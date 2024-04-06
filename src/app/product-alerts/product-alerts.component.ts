/*
To set up ProductAlertsComponent to receive product data, first import Input from @angular/core

To make the Notify Me button work, the child component needs to notify and pass the data to the parent component. The ProductAlertsComponent needs to emit an event when the user clicks Notify Me and the ProductListComponent needs to respond to the event.
*/
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  /*
In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator. The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
*/
  @Input() product: Product | undefined;

  @Output() notifyEvent = new EventEmitter();

  /*notify() {
    window.alert('The product has been notified ok!');    
  }*/
}
