import { Component, OnInit } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


}




// getSum(index: number) : number {
//   let sum = 0;
//   for(let i = 0; i < this.items.length; i++) {
//     sum += this.items[i][index];
//   }
//   return sum;
// }
// and in your html, replace your SUMX by:

// <td>{{ getSum(0) }} </td><td>{{ getSum(1) }}</td> ...
