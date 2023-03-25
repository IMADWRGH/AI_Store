import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  constructor() { };
  listItems: any[] = [];
  addToCart(product: any) { this.listItems.push(product); }
}
