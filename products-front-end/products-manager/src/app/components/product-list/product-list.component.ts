import { IProduct } from './../../interfaces/iproduct';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input('products') products: IProduct[];
  @Output() updateProduct = new EventEmitter<IProduct>();
  @Output() deleteProduct = new EventEmitter<number>();

  constructor() {}

  UpdateProduct(product: IProduct) {
    this.updateProduct.emit(product);
  }

  DeleteProduct(id: number) {
    this.deleteProduct.emit(id);
  }

  ngOnInit(): void {}
}
