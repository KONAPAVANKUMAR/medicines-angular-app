import { Component, OnInit } from '@angular/core';
import { orders } from '../global';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css','../bootstrap.min.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  orders = orders;

  ngOnInit(): void {
  }

}
