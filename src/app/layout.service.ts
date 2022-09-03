import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ILayoutServiceData {
  title: string;
  subtitle: string;
}

@Injectable()
export class LayoutService {
  private product$ = new BehaviorSubject<any>({});
  selectedProduct$ = this.product$.asObservable();
  private productListBus$ = new BehaviorSubject<any>([]);
  productList$ = this.productListBus$.asObservable();
  constructor() {}

  setProduct(product: any) {
    this.product$.next(product);
  }
 
  setProductList(products: any) {
    this.productListBus$.next(products);
  }
}