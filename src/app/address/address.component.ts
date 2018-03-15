import { Component, Input } from '@angular/core';
import { Address } from '../customer.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input() address : Address;
  regions = ['East','West','North','South'];
  states = ['Delhi', 'Uttra Kand', 'Uttar Pradesh'];
}
