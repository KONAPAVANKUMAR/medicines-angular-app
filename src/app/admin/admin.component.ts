import { Component, OnInit } from '@angular/core';
import { Medicine, medicines } from '../global';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css','../bootstrap.min.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  medicines = medicines;
  name : String = '';
  price : String = '';
  onSubmit(){
    medicines.push(new Medicine(this.name,Number(this.price)));
    this.name = '';
    this.price = '';

  }

  delete(medicine:Medicine){
    medicines.splice(medicines.indexOf(medicine),1);
  }

  ngOnInit(): void {

  }

}
