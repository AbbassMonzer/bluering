import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  name = 'World';
  constructor() { }

  ngOnInit(): void {

  }

toggleWithGreeting(popover, greetings: string[], language: string) {
  if (popover.isOpen()) {
    popover.close();
  } else {
    popover.open({greetings: greetings, language});
  }
}

}
