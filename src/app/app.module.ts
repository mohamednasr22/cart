import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/* prime module */
import { ButtonModule } from 'primeng/button';
 import { ToastModule } from 'primeng/toast';/*
import { ConfirmPopupModule } from 'primeng/confirmpopup'; */





import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { SeeOrdersComponent } from './orders/see-orders/see-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    CreateOrderComponent,
    SeeOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
     ToastModule,/*
    ConfirmPopupModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
