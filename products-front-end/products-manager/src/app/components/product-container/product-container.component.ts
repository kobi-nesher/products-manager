import { IProduct } from './../../interfaces/iproduct';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
})
export class ProductContainerComponent implements OnInit {
  public products: IProduct[] = [];

  AddProduct(product: IProduct) {
    console.log(product);
    this._productsService
      .createProduct(product)
      .subscribe(() => this.GetAllProducts());
  }

  GetAllProducts() {
    console.log('container');
    this._productsService.getAllProducts().subscribe((resp: any) => {
      this.products = resp.data;
      console.log(resp);
    });
  }

  UpdateProduct(product: IProduct) {
    this._productsService
      .updateProduct(product.id, product)
      .subscribe(() => this.GetAllProducts());
  }

  DeleteProduct(id: number) {
    this._productsService
      .deleteProduct(id)
      .subscribe(() => this.GetAllProducts());
  }

  constructor(private _productsService: ProductService) {}

  ngOnInit(): void {
    this.GetAllProducts();
  }
}
