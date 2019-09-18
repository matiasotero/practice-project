import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shoppingListMock = [
    { description: "banana", price: 2.14, unit: 10 },
    { description: "potato", price: 7.55, unit: 3 },
    { description: "peach", price: 4.99, unit: 4 },
    { description: "apple", price: 9.01, unit: 6 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
