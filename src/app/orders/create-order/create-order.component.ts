import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MessageService } from 'primeng/api';


import * as $ from 'jquery';

interface IOrderItem {
  id: number,
  name: string,
  quantity: number,
  type:number
}

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  @ViewChild('order_model') myModal: any;

  available_items: IOrderItem[] = [];
  available_trays: IOrderItem[] = [];
  modalStatus = 0;
  current_order: IOrderItem[] = [];
  current_item?: IOrderItem;
  input_qunatity: number = 0;
  disabledSaveButton = true;
  openModelToEdit = false
  noAdd = false
  oldOrders:[]=[];



  constructor(private ordersService: OrdersService,
    private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getAvailableItems();
    this.getAvailableTrays();
  }

  getAvailableItems() {
    this.ordersService.getAvailableItems().subscribe((res: any) => {
      this.available_items = res
    })
  }
  getAvailableTrays() {
    this.ordersService.getAvailableTrays().subscribe((res: any) => {
      this.available_trays = res
    })
  }
  selectItem(item: any, index: any) {
    this.noAdd = false
    this.modalStatus=0

    if (index != 0) {
      this.modalStatus=1
      this.input_qunatity = item.quantity;
      this.current_item = item;
      return;
    } 
    if (this.current_order.includes(item)) {
      this.noAdd = true
      return;
    }
    this.input_qunatity = 0
    this.current_item = item;
  }
  addItem() {
    
    if (this.current_item == null)
      return;

    if(this.modalStatus==1)
    {
      const indexToUpdate = this.current_order.findIndex(obj => obj === this.current_item);
      this.current_order[indexToUpdate].quantity = this.input_qunatity;
      return;
    }

    

    this.current_item.quantity = this.input_qunatity;

    const len = this.current_order.length
    this.current_order[len] = this.current_item;
    this.input_qunatity = 0;
  }
  saveOrder() {
    this.ordersService.addOrder(this.current_order).subscribe(res=>{
      if(res!=null)
      {
        this.current_order.length =0
        const len = this.oldOrders.length
      }
    })

  }


  


  deleteItem(indexItem: any) {
    const orders: IOrderItem[] = this.current_order; // Your array of IOrder


    this.current_order = orders.filter((_, index) => index !== indexItem);


  }
  OpenToEditItem(item: any) {
    this.current_item = item;
    this.input_qunatity = item.quantity
  }


  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
