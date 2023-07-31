import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './orders/create-order/create-order.component';

const routes: Routes = [
  { path: "", component: CreateOrderComponent },
  { path: "create-order", component: CreateOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
