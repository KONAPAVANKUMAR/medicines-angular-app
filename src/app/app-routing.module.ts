import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path : '',component : MedicinesComponent},
  {path : 'admin', component : AdminComponent},
  {path : 'cart', component : CartComponent},
  {path : 'order', component : OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
