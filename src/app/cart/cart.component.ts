import { Component, OnInit } from '@angular/core';
import { cartitems, Medicine, Order, orders } from '../global';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css','../bootstrap.min.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  cartitems = cartitems;
  delete(cartitem:Medicine){
    cartitems.splice(cartitems.indexOf(cartitem),1);
  }

  orders = orders;

  placeorder(){
    let temp : Medicine[] = []
    cartitems.forEach(element => {
      temp.push(element);
      
    });

    orders.push(new Order(temp));
    console.log(orders);
    cartitems.splice(0);
  }

  ngOnInit(): void {
  }

}
