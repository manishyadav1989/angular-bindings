import { Component } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customer : Customer;

  customers: Customer[] = [
      {
        id:1,
        name:"Ram",
        address:{
          city:"Noida",
          street:"s1-4 Sector-2 Noida",
          state:"Uttar Pradesh",
          region:"East"
        }
      },
      {
        id:2,
        name:"Shyam",
        address:{
          city:"Delhi",
          street:"G-6 Naveen shahadra Delhi",
          state:"Delhi",
          region:"West"
        }
      },
      {
        id:3,
        name:"Krishna",
        address:{
          city:"Delhi",
          street:"F-6 Dwarika New Delhi",
          state:"Delhi",
          region:"South"
        }
      },
      {
        id:4,
        name:"Mohan",
        address:{
          city:"Dehradun",
          street:"D-2 New bus stand Dehradun",
          state:"Uttra Kand",
          region:"North"
        }
      }
  ];

  shift(increment: number){
      let ix = this.customers.findIndex(current => current === this.customer )+increment;
      ix = Math.min(this.customers.length-1, Math.max(0, ix));
      this.customer = this.customers[ix];
  }
}
