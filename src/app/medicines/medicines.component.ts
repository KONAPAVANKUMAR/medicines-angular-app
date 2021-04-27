import { Component, OnInit } from '@angular/core';
import { cartitems, Medicine, medicines } from '../global';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css','../bootstrap.min.css']
})
export class MedicinesComponent implements OnInit {

  constructor() { }
  medicines = medicines;
  cartitems = cartitems;

  addtocart(medicine:Medicine){
    cartitems.push(medicine);
  }

  ngOnInit(): void {
  }

}
