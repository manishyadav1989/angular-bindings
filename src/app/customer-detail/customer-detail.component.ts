import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from './../customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
  @Input() customer : Customer;
  showAddress = true;
  @Output() shift = new EventEmitter<number>();

  left(){
    this.shift.emit(-1)
  }

  right(){
    this.shift.emit(1)
  }
}
