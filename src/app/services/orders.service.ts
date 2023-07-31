import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {

  }
  getAvailableItems() {
    return this.http.get(this.url + 'available_items');
  }
  getAvailableTrays() {
    return this.http.get(this.url + 'available_trays');
  }
  addOrder(order:any) {
    return this.http.post(this.url + 'orders',{order});
  }

}
