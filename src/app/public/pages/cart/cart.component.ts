import { Component } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private CartServiceService: CartServiceService) { }
  get listItems() { return this.CartServiceService.listItems; }

}
