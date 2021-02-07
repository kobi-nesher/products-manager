import { ProductService } from './../../services/product.service';
import { IProduct } from './../../interfaces/iproduct';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input('products') products: IProduct[];
  @Output() updateProduct = new EventEmitter<IProduct>();
  @Output() deleteProduct = new EventEmitter<number>();

  constructor(
    private _productsService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  UpdateProduct(product: IProduct) {
    this.updateProduct.emit(product);
    // this._productsService
    //   .updateProduct(product.id, product)
    //   .subscribe(() => this.GetAllProducts());
  }

  // AddProduct(product: IProduct) {
  //   if (this.NewProductForm.valid) {
  //     this._productsService
  //       .createProduct(product)
  //       .subscribe(() => this.GetAllProducts());
  //   }
  // }

  DeleteProduct(id: number) {
    this.deleteProduct.emit(id);
    // this._productsService
    //   .deleteProduct(id)
    //   .subscribe(() => this.GetAllProducts());
  }

  GetAllProducts() {
    // this._productsService.getAllProducts().subscribe((resp: any) => {
    //   this.products = resp.data;
    //   console.log(resp);
    // });
  }

  ngOnInit(): void {}
}
