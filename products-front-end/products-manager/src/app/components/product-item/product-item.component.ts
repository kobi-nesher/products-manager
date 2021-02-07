import { IError } from './../../interfaces/ierror';
import { IProduct } from './../../interfaces/iproduct';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: '[product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input('product') product: IProduct;
  @Output('deleteProduct') deleteProduct = new EventEmitter<void>();
  @Output('updateProduct') updateProduct = new EventEmitter<IProduct>();
  editStatus: boolean = false;
  valid: boolean = true;
  tempProduct: IProduct;
  errors: IError[] = [];

  constructor() {}

  editProduct() {
    this.editStatus = true;
    this.tempProduct = { ...this.product };
  }

  isFormValid() {
    this.errors = [];
    if (this.tempProduct.name.length < 2) {
      this.errors.push({
        type: 'name',
        message: 'product name must be at least 2 characters',
      });
    }
    if (this.tempProduct.name.length > 255) {
      this.errors.push({
        type: 'name',
        message: 'product name cannot exceed 255 characters',
      });
    }
    if (this.tempProduct.price < 0.01) {
      this.errors.push({
        type: 'price',
        message: 'price must be at least 0.01',
      });
    }
    if (this.tempProduct.stock < 0) {
      this.errors.push({
        type: 'stock',
        message: 'stock cannot have negative value',
      });
    }
    return this.errors.length === 0;
  }

  Save() {
    if (this.isFormValid()) {
      console.log('valid');
      this.updateProduct.emit(this.tempProduct);
    }
  }

  DeleteProduct() {
    this.deleteProduct.emit();
  }

  ngOnInit(): void {}
}
