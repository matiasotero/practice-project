import { Injectable } from '@angular/core';
import { observable, of, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';

export interface ItemShopping {
  id: number;
  description: string;
  price: number;
  unit:number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getItemsShopping(): Observable<ItemShopping[]> {
    let items = mockItemsShopping();
    return of(items).pipe(delay(500));
  }  
}

function mockItemsShopping(){
  return [
    { id: 3242, description: "banana", price: 2.14, unit: 10 },
    { id: 4535, description: "potato", price: 7.55, unit: 3 },
    { id: 4545,description: "peach", price: 4.99, unit: 4 },
    { id: 1231,description: "apple", price: 9.01, unit: 6 }
  ];
}
